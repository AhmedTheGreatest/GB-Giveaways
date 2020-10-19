import os

directory = "./imgs/Mugs"

with open("mugs.html", "a") as file:
    for filename in os.listdir(directory):
        if filename.endswith(".png") or filename.endswith(".jpg") or filename.endswith(".jpeg"): 
            #file.write(f'<img src="{print(os.path.join(directory, filename))} alt="product" class="Product">')
           
            file.write(f"""
<div class="card Product" style="width: 18rem;">
    <img src="{os.path.join(directory, filename)}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">Customized</h5>
    </div>
</div>
                """)
            
            continue
        else:
            continue


#f"{os.path.join(directory, filename)}"

#'<p class="card-text">[DESC_HERE]</p>'
