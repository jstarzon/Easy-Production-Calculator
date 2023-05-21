from flask import Flask, request, jsonify
import psycopg2
from datetime import datetime
from flask_cors import CORS, cross_origin

app = Flask(__name__)

# PostgreSQL connection configuration
conn = psycopg2.connect(
    host="localhost",
    port="5432",
    database="backend",
    user="postgres",
    password="your_password"
)

@app.route('/api/endpoint', methods=['POST'])
@cross_origin()
def process_data():
    data = request.json
    
    # Extract data from the request
    pobrane = data.get('pobrane')
    tacka = data.get('tacka')
    reszta = data.get('reszta')
    produkcja = data.get('produkcja')
    arkusze = data.get('arkusze')
    niepelneark = data.get('niepelneark')
    niepelnepal = data.get('niepelnepal')
    jakosc = data.get('jakosc')
    maszyna = data.get('maszyna')
    inne = data.get('inne')
    tok = data.get('tok')
    banderole = data.get('banderole')
    
    # Get the current date and time
    now = datetime.now()
    current_datetime = now.strftime("%Y-%m-%d %H:%M:%S")
    
    # Save the data to the PostgreSQL database
    cursor = conn.cursor()
    insert_query = """
        INSERT INTO banderole (datetime, pobrane, tacka, reszta, produkcja, arkusze, niepelneark, niepelnepal, jakosc, maszyna, inne, tok, banderole)
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
    """
    values = (
        current_datetime, pobrane, tacka, reszta, produkcja, arkusze, niepelneark, niepelnepal, jakosc, maszyna, inne, tok, banderole
    )
    cursor.execute(insert_query, values)
    conn.commit()
    cursor.close()
    
    # Return a response
    response = {'message': 'Data received and saved successfully'}
    return jsonify(response), 200

if __name__ == '__main__':
    app.run(debug=True)
