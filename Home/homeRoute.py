#!/usr/bin/env python3 

# Importing the necssary modules 
import os 
from flask import request, Blueprint, render_template, redirect, url_for, jsonify

# Creating the blueprint object 
home = Blueprint('home', __name__, 
                template_folder='templates', 
                static_folder='static')

# Simple in-memory storage for nonces
nonces = {}

# Creating the home page 
@home.route("/", methods=["GET", "POST"])
def HomePage(): 
    # Rendering the html template file 
    return render_template("home.html"); 
