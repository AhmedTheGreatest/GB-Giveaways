from flask import Flask, redirect, url_for, render_template

app = Flask(__name__)

#Website

@app.route("/")
@app.route("/home/")
@app.route("/index/")
def Home():
    return render_template("pages/home.html")

@app.route("/aboutus/")
def AboutUs():
    return render_template("pages/aboutUs.html")

@app.route("/contactus/")
def ContactUs():
    return render_template("pages/contactUs.html")

@app.route("/careers/")
def Careers():
    return render_template("pages/careers.html")

@app.route("/clients/")
def Clients():
    return render_template("pages/clients.html")

@app.route("/services/")
def Services():
    return render_template("pages/services.html")

#Products
#Pens

@app.route("/products/pens/montblanc")
def Pens_MontBlanc():
    return render_template("pages/products/pens_montblanc.html")

@app.route("/products/pens/cross")
def Pens_Cross():
    return render_template("pages/products/pens_cross.html")

@app.route("/products/pens/parker")
def Pens_Parker():
    return render_template("pages/products/pens_parker.html")

@app.route("/products/pens/embassador")
def Pens_Embassador():
    return render_template("pages/products/pens_embassador.html")

@app.route("/products/pens/senator")
def Pens_Senator():
    return render_template("pages/products/pens_senator.html")

#USB

@app.route("/products/usb/customized")
def USB_Customized():
    return render_template("pages/products/usb_customized.html")

@app.route("/products/usb/hp")
def USB_HP():
    return render_template("pages/products/usb_hp.html")

@app.route("/products/usb/kingston")
def USB_Kingston():
    return render_template("pages/products/usb_kingston.html")

@app.route("/products/usb/samsung")
def USB_Samsung():
    return render_template("pages/products/usb_samsung.html")

@app.route("/products/usb/sandisk")
def USB_SanDisk():
    return render_template("pages/products/usb_sandisk.html")

#Mugs

@app.route("/products/mugs/customized")
def Mugs_Customized():
    return render_template("pages/products/mugs_customized.html")

#Power Banks

@app.route("/products/powerbanks/customized")
def Powerbanks_Customized():
    return render_template("pages/products/powerbanks_customized.html")

@app.route("/products/powerbanks/anker")
def Powerbanks_Anker():
    return render_template("pages/products/powerbanks_anker.html")

@app.route("/products/powerbanks/samsung")
def Powerbanks_Samsung():
    return render_template("pages/products/powerbanks_samsung.html")

@app.route("/products/powerbanks/romoss")
def Powerbanks_Romoss():
    return render_template("pages/products/powerbanks_romoss.html")

@app.route("/products/powerbanks/xiaomi")
def Powerbanks_Xiaomi():
    return render_template("pages/products/powerbanks_xiaomi.html")

@app.route("/products/powerbanks/infinix")
def Powerbanks_Infinix():
    return render_template("pages/products/powerbanks_infinix.html")

# Clocks
@app.route("/products/clocks/tableclocks")
def Clocks_TableClocks():
    return render_template("pages/products/clocks_tableclock.html")

@app.route("/products/clocks/wallclocks")
def Clocks_WallClocks():
    return render_template("pages/products/clocks_wallclock.html")

# T-Shirts
@app.route("/products/tshirts/customized")
def TShirts_Customized():
    return render_template("pages/products/tshirts_customized.html")

# Keychains
@app.route("/products/keychains/customized")
def Keychains_Customized():
    return render_template("pages/products/keychains_customized.html")

# Lightning

@app.route("/products/lightning/torches")
def Lightning_torches():
    return render_template("pages/products/lightning_torches.html")

@app.route("/products/lightning/emergencylights")
def Lightning_EmergencyLights():
    return render_template("pages/products/lightning_emergencylights.html")

# Leather Items

@app.route("/products/leather_items/wallets")
def Leather_Wallets():
    return render_template("pages/products/leather_wallets.html")

@app.route("/products/leather_items/phonecovers")
def Leather_PhoneCovers():
    return render_template("pages/products/leather_phonecovers.html")

@app.route("/products/leather_items/mousepads")
def Leather_MousePads():
    return render_template("pages/products/leather_mousepads.html")

@app.route("/products/leather_items/laptopbags")
def Leather_LaptopBags():
    return render_template("pages/products/leather_laptopbags.html")

@app.route("/products/leather_items/sets")
def Leather_Sets():
    return render_template("pages/products/leather_sets.html")

# Surgical

@app.route("/products/surgical/masks")
def Surgical_Masks():
    return render_template("pages/products/surgical_masks.html")

@app.route("/products/surgical/gloves")
def Surgical_Gloves():
    return render_template("pages/products/surgical_gloves.html")

@app.route("/products/surgical/thermometer")
def Surgical_Thermometer():
    return render_template("pages/products/surgical_thermometer.html")

# Printing Items

@app.route("/products/printing/tablecalendars")
def PrintingItems_TableCalendars():
    return render_template("pages/products/printing_tablecalendars.html")

@app.route("/products/printing/wallcalendars")
def PrintingItems_WallCalendars():
    return render_template("pages/products/printing_wallcalendars.html")

@app.route("/products/printing/diaries")
def PrintingItems_Diaries():
    return render_template("pages/products/printing_diaries.html")

# Caps

@app.route("/products/caps/customized")
def Caps_Customized():
    return render_template("pages/products/caps_customized.html")

@app.route("/<name>")
def PGNOTFOUND(name):
    return render_template("PageNotFind.html", name=name)

if __name__ == "__main__":
    app.run(debug=True)