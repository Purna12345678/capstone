from flask import Flask, request, jsonify
import pandas as pd
import joblib

app = Flask(__name__)

@app.route('/predict', methods=['POST'])
def predict():
    global model
    if model is None:
        return jsonify({'error': 'Model not trained yet'}), 400

    input_data = request.json
    if not input_data:
        return jsonify({'error': 'No input data provided'}), 400

    # Convert input data to DataFrame
    input_df = pd.DataFrame([input_data])

    # Predict
    prediction = model.predict(input_df)[0]

    return jsonify({'prediction': str(prediction)})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=6000)
