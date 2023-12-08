class DataMgr {
    user = {"fullname": "", "email": "","phonenumber": "", "address": "", "note": ""};

    saveUser = function(user) {
        this.user = user;

        let json= JSON.stringify(user);
        localStorage.setItem("user", json);
    };

    loadData = function(){
        let json = localStorage.getItem("user");
        if(json == null || json == ""){ 
            return
        }
        this.user = JSON.parse(json);
    }
}

const data =  new DataMgr()
export default data