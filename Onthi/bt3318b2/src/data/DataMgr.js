class DataMgr {
    product = {"tieude": "", "hinhanh": "", "gia": ""};

    saveProduct = function(product) {
        this.product = product;
        localStorage.setItem("product", JSON.stringify(this.product));
    }

    loadData = function() {
        let json = localStorage.getItem("product");
        if(json == null || json == "") {
            return;
        }
        this.product = JSON.parse(json);
    }
}

const data = new DataMgr();
export default data;