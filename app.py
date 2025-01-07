from flask import Flask, render_template

app = Flask(__name__)

# Rute untuk halaman utama
@app.route('/')
def home():
    return render_template('index.html')

# Rute untuk halaman produk
@app.route('/produk')
def produk():
    return render_template('produk.html')

# Rute untuk halaman lokasi
@app.route('/lokasi')
def lokasi():
    return render_template('lokasi.html')

# Rute untuk halaman keranjang
@app.route('/keranjang')
def keranjang():
    return render_template('kerjang.html')  # Pastikan nama file benar

# Rute untuk halaman form
@app.route('/form')
def form():
    return render_template('form.html')

# Rute untuk halaman makanan
@app.route('/makanan')
def makanan():
    return render_template('makanan.html')

# Rute untuk halaman minuman
@app.route('/minuman')
def minuman():
    return render_template('minuman.html')

if __name__ == '__main__':
    app.run(debug=True)
