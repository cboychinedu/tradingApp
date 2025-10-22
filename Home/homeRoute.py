#!/usr/bin/env python3 

# Importing the necssary modules 
import os 
from datetime import datetime
from flask import request, Blueprint, render_template, redirect, url_for, jsonify

# Creating the blueprint object 
home = Blueprint('home', __name__, 
                template_folder='templates', 
                static_folder='static')


# Creating the home page 
@home.route("/", methods=["GET", "POST"])
def HomePage(): 
    # Rendering the html template file 
    return render_template("home.html"); 

