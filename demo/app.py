from flask import Flask, render_template

app = Flask(__name__)

# global variable
# modules = ['project',
#            'flow',
#            'report',
#            'calc',
#            'chat',
#            'knowledge',
#            'workflow',
#            'interoperability',
#            'optimization',
#            'code',
#            'model',
#            'detail',
#            'basic',
#            'license',
#            'news']

modules = ['project',
           'flow',
           'report',
           'calc',
           'chat']

@app.route("/")
def index():
    return render_template("index.html", modules=modules)


@app.route("/project")
def project():
    return render_template("project.html")


@app.route("/flow")
def flow():
    return render_template("flow.html")


@app.route("/report")
def report():
    return render_template("report.html")


@app.route("/calc")
def calc():
    return render_template("calc.html")


@app.route("/chat")
def chat():
    return render_template("chat.html")