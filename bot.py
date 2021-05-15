import os
directory = "./static/imgs/Caps"
with open("./templates/caps_customized.html", "w") as file:
    file.write("""
{% extends "base.html" %}
{% block title %} Products {% endblock %}
{% block content %}
<h3 class="Products-Title">Customized Caps</h3>
<div id="Products-Category" class="Caps">
""")
    for filename in os.listdir(directory):
        if filename.endswith(".png") or filename.endswith(".jpg") or filename.endswith(".jpeg"): 
            #file.write(f'<img src="{print(os.path.join(directory, filename))} alt="product" class="Product">')
           
            file.write(f"""
    <div class="card Product" style="width: 18rem;">
        <img src="{{\u007b url_for('static', filename='{directory[9:] + "/" + filename}')\u007d}}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Cap</h5>
        </div>
    </div>
""")
            
            continue
        else:
            continue
    file.write("""
</div>
{% endblock %}""")