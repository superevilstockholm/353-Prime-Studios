from flask import Flask, render_template

app = Flask(__name__, template_folder='templates', static_folder='static')

@app.route('/', methods=['GET'])
def index_page():
    return render_template('index.html')

@app.route('/text2speech', methods=['GET', 'POST'])
def texttospeech_page():
    return render_template('text_to_speech.html')

if __name__ == '__main__':
    app.run(debug=True, host='192.168.35.127', port=2323)