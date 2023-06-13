/*
----------------------------------------------------------------
|Soppiya Blog CDN documentation v2.1                           |
----------------------------------------------------------------
|Please select the data specifically needed for your use case. |
|Rendering unused/unwanted data may result in a slow data load.|
----------------------------------------------------------------

Data Object Instruction [new Blogs(businessId).state.data]
-------------------------------------------------------------------------------------
|   property        |  Data type    |  Example Data     |   Output                  |
-------------------------------------------------------------------------------------
|   count           |   Boolean     |   true, false     |   blogs count for query   |
|   title           |   Boolean     |   true. false     |   blog title              |
|   tags            |   Boolean     |   true, false     |   blog tags               |
|   slug            |   Boolean     |   true, false     |   blog slug               |
|   post            |   Boolean     |   true, false     |   blog post               |
|   items           |   Boolean     |   true, false     |   blog post items         |
|   thumbnail       |   Boolean     |   true, false     |   blog thumbnail          |
|   metaTags        |   Boolean     |   true, false     |   blog metaTags           |
|   metaDescription |   Boolean     |   true, false     |   blog metaDescription    |
|   view            |   Boolean     |   true, false     |   blog view count         |
|   createdAt       |   Boolean     |   true, false     |   blog creation time      |
-------------------------------------------------------------------------------------
*/

class Blog {
    constructor(businessId) {
        this.businessId = businessId;
        this.baseURL = `https://api.soppiya.com/v2.1/site/widget/blog`;
        this.state = {
            data: { count: false, title: false, tags: false, slug: false, post: false, items: false, thumbnail: false, metaTags: false, metaDescription: false, view: false, createdAt: false }
        },
        this.getBlog = async (handle) => {
            try {
                let selectedData = new FormData();
                selectedData.append("data", JSON.stringify(this.state.data));
                selectedData.append("slug", handle);
                let response = null;
                response = await fetch(this.baseURL, { method: "post", headers: { "businessid": this.businessId }, body: selectedData });
                response = await response.json();
                if (response.Error) throw new Error()
                return response;
            } catch (e) { return {} };
        };
        this.saveState = async () => { localStorage.setItem("soppiya_blog", JSON.stringify(this.state)) };
        this.populateSate = async () => { try { this.state = JSON.parse(await localStorage.getItem("soppiya_blog")) } catch (err) { return { data: {} } } };
    }
}

/*
----------------------------------------------------------------
|Soppiya Blogs CDN documentation v2.1                          |
----------------------------------------------------------------
|Please select the data specifically needed for your use case. |
|Rendering unused/unwanted data may result in a slow data load.|
----------------------------------------------------------------

Data Object Instruction [new Blogs(businessId).state.data]
-------------------------------------------------------------------------------------
|   property        |  Data type    |  Example Data     |   Output                  |
-------------------------------------------------------------------------------------
|   count           |   Boolean     |   true, false     |   blogs count for query   |
|   title           |   Boolean     |   true. false     |   blog title              |
|   tags            |   Boolean     |   true, false     |   blog tags               |
|   slug            |   Boolean     |   true, false     |   blog slug               |
|   post            |   Boolean     |   true, false     |   blog post               |
|   thumbnail       |   Boolean     |   true, false     |   blog thumbnail          |
|   metaTags        |   Boolean     |   true, false     |   blog metaTags           |
|   metaDescription |   Boolean     |   true, false     |   blog metaDescription    |
|   view            |   Boolean     |   true, false     |   blog view count         |
|   createdAt       |   Boolean     |   true, false     |   blog creation time      |
-------------------------------------------------------------------------------------

Filter Object Instruction [new Blogs(businessId).state.filter]
---------------------------------------------------------------------------------
|   property    |  Data type    |  Example Data     |   Output                  |
---------------------------------------------------------------------------------
|   search      |   String      |   blog name       |   search by blog name     |
|   tags        |   String      |   blog tags       |   filter by blog tags     |
|   blogs       |   array       |   blog ids        |   filter by blog ids      |
|   skip        |   Number      |   0,1,2...10      |   X results are skipped   |
|   limit       |   Number      |   0,1,2...10      |   X number of results     |
---------------------------------------------------------------------------------

Sort Object Instruction [new Blogs(businessId).state.sort]
---------------------------------------------------------------------------------
|   property    |  Data type    |  Example Data     |   Output                  |
---------------------------------------------------------------------------------
|   name        |   String      |   "ATZ", "ZTA"    |   sort by name            |
|   upload      |   String      |   "NTO", "OTN"    |   sort by upload time     |
|   view        |   String      |   "HTL", "LTH"    |   sort by views           |
---------------------------------------------------------------------------------

*/
class Blogs {
    constructor(businessId) {
        this.businessId = businessId;
        this.baseURL = `https://api.soppiya.com/v2.1/site/widget/blogs`;
        this.state = {
            data: { count: false, title: false, tags: false, slug: false, post: false, thumbnail: false, metaTags: false, metaDescription: false, view: false, createdAt: false },
            filter: { search: "", tags: "", blogs: [], skip: 0, limit: 10},
            sort: { name: "ATZ", upload: "OTN", view: "HTL" }
        },
        this.getBlogs = async () => {
            try {
                let selectedData = new FormData();
                selectedData.append("data", JSON.stringify(this.state.data));
                selectedData.append("filter", JSON.stringify(this.state.filter));
                selectedData.append("sort", JSON.stringify(this.state.sort));
                let response = null;
                response = await fetch(this.baseURL, { method: "post", headers: { "businessid": this.businessId }, body: selectedData });
                response = await response.json();
                if (response.Error) throw new Error()
                return response;
            } catch (e) { return {} };
        };
        this.saveState = async () => { localStorage.setItem("soppiya_blogs", JSON.stringify(this.state)) };
        this.populateSate = async () => { try { this.state = JSON.parse(await localStorage.getItem("soppiya_blogs")) } catch (err) { return { data: {}, filter: {}, sort: {} } } };
    }
}

/*
----------------------------------------------------------------
|Soppiya Category CDN documentation v2.1                       |
----------------------------------------------------------------
|Please select the data specifically needed for your use case. |
|Rendering unused/unwanted data may result in a slow data load.|
----------------------------------------------------------------

Data Object Instruction [new Category(businessId).state.data]
---------------------------------------------------------------------------------
|   property    |  Data type    |  Example Data     |   Output                  |
---------------------------------------------------------------------------------
|   count       |   Boolean     |   true, false     |   category count for query|
|   name        |   Boolean     |   true. false     |   category name           |
|   description |   Boolean     |   true, false     |   category description    |
|   image       |   Boolean     |   true, false     |   category image          |
|   cover       |   Boolean     |   true, false     |   category cover          |
|   parent      |   Boolean     |   true, false     |   category parent         |
|   grandParent |   Boolean     |   true, false     |   category grand parent   |
|   createdAt   |   Boolean     |   true, false     |   category create time    |
|   itemCount   |   Boolean     |   0,1,2,.. 10     |   category item count     |
|   image       |   Boolean     |   0,1,2,.. 10     |   category image          |
|   hasChild    |   Object      |       --          |        --                 |
|   -> _id      |   Boolean     |   0,1,2,.. 10     |   category child id       |
|   -> name     |   Boolean     |   0,1,2,.. 10     |   category child name     |
|   -> image    |   Boolean     |   0,1,2,.. 10     |   category child image    |
|   -> hasChild |   Boolean     |   0,1,2,.. 10     |   category child has clild|              |
---------------------------------------------------------------------------------

Filter Object Instruction [new Category(businessId).state.filter]
---------------------------------------------------------------------------------
|   property    |  Data type    |  Example Data     |   Output                  |
---------------------------------------------------------------------------------
|   skip        |   Number      |   0,1,2...10      |   X results are skipped   |
|   limit       |   Number      |   0,1,2...10      |   X number of results     |
|   search      |   String      |   item name       |   search by category name |
|   categories  |   Array       |   ["cid1","cid2"] |   limit by categorie(s)   |
|   parentId    |   String      |   "catParentId"   |   category with parent    |
---------------------------------------------------------------------------------

Sort Object Instruction [new Category(businessId).state.sort]
---------------------------------------------------------------------------------
|   property    |  Data type    |  Example Data     |   Output                  |
---------------------------------------------------------------------------------
|   name        |   String      |   "ATZ", "ZTA"    |   sort by name            |
|   upload      |   String      |   "NTO", "OTN"    |   sort by upload time     |
|   itemCount   |   String      |   "HTL", "LTH"    |   sort by item count      |
---------------------------------------------------------------------------------

*/

class Category {
    constructor(businessId) {
        this.businessId = businessId;
        this.baseURL = `https://api.soppiya.com/v2.1/site/widget/category`;
        this.state = {
            data: { count: true, name: true, description: true, image: true, cover: true, parent: true, grandParent: true, createdAt: true, itemCount: true, hasChild: true, childData: {_id: true, name: true, image: true, hasChild: true}},
            filter: { search: "",  categories: [], skip: 0, limit: 10, parentId: ""},
            sort: { name: "ATZ", upload: "OTN", itemCount: "HTL" }
        },
        this.getCategories = async () => {
            try {
                let selectedData = new FormData();
                selectedData.append("data", JSON.stringify(this.state.data));
                selectedData.append("filter", JSON.stringify(this.state.filter));
                selectedData.append("sort", JSON.stringify(this.state.sort));
                let response = null;
                response = await fetch(this.baseURL, { method: "post", headers: { "businessid": this.businessId }, body: selectedData });
                response = await response.json();
                if (response.Error) throw new Error()
                return response;
            } catch (e) { return {} };
        };
        this.getCategoryTree = async () => {
            try{
                let response = null;
                response = await fetch(`${this.baseURL}/tree`, { method: "get", headers: { "businessid": this.businessId }})
                response = await response.json();
                if (response.Error) throw new Error()
                return response;
            }catch(e){return []}
        }
        this.saveState = async () => { localStorage.setItem("soppiya_category", JSON.stringify(this.state)) };
        this.populateSate = async () => { try { this.state = JSON.parse(await localStorage.getItem("soppiya_category")) } catch (err) { return { data: {}, filter: {}, sort: {} } } };
    }
}

/*
----------------------------------------------------------------
|Soppiya Combo CDN documentation v2.1                          |
----------------------------------------------------------------
|Please select the data specifically needed for your use case. |
|Rendering unused/unwanted data may result in a slow data load.|
----------------------------------------------------------------

Data Object Instruction [new Combo(businessId).state.data]
-------------------------------------------------------------------------------------------------
|   property        |  Data type    |  Example Data     |   Output                              |
-------------------------------------------------------------------------------------------------
|   ComboInfo       |   Object      |        --         |          --                           |
|   -> name         |   Boolean     |   true. false     |   combo name                          |
|   -> description  |   Boolean     |   true, false     |   combo description                   |
|   -> start        |   Boolean     |   true, false     |   combo start time                    |
|   -> end          |   Boolean     |   true, false     |   combo end time                      |
|   -> cover        |   Boolean     |   true, false     |   combo cover                         |
|   packagesInfo    |   Object      |        --         |          --                           |
|   -> name         |   Boolean     |   true, false     |   combo package name                  |
|   -> image        |   Boolean     |   true. false     |   combo package image                 |
|   -> price        |   Boolean     |   true. false     |   combo package price                 |
|   -> description  |   Boolean     |   true. false     |   combo package rating                |
|   itemsInfo       |   Object      |        --         |          --                           |
|   -> name         |   Boolean     |   true, false     |   combo package item name             |
|   -> variation    |   Boolean     |   true. false     |   combo package item variation namne  |
|   -> image        |   Number      |   0,1,2....10     |   combo package item image            |
|   -> slug         |   Boolean     |   true. false     |   combo package item slug             |
|   -> price        |   Boolean     |   true. false     |   combo package item price            |
-------------------------------------------------------------------------------------------------

Filter Object Instruction [new Combo(businessId).state.filter]
---------------------------------------------------------------------------------
|   property    |  Data type    |  Example Data     |   Output                  |
---------------------------------------------------------------------------------
|   skip        |   Number      |   0,1,2...10      |   X results are skipped   |
|   limit       |   Number      |   0,1,2...10      |   X number of results     |
|   packages    |   array       |   package ids     |   packages by selected ids|
---------------------------------------------------------------------------------

*/

class Combo {
    constructor(businessId) {
        this.businessId = businessId;
        this.baseURL = `https://api.soppiya.com/v2.1/site/widget/combo`;
        this.state = {
            data: {
                comboInfo: {name: false, description: false, start: false, end: false, cover: false},
                packagesInfo: {name: false, image: false, price: false, description: false},
                itemsInfo:{ name: false, variation: false, image: false, slug: false, price: false }
            },
            filter:{skip: 0, limit: null, packages: []}
        },
        this.getCombo = async () => {
            try {
                let selectedData = new FormData();
                selectedData.append("data", JSON.stringify(this.state.data));
                selectedData.append("filter", JSON.stringify(this.state.filter));
                let response = null;
                response = await fetch(this.baseURL, { method: "post", headers: { "businessid": this.businessId }, body: selectedData });
                response = await response.json();
                if(response.Error) throw new Error()
                return response;
            } catch (e) { return {} };
        };
        this.saveState = async() =>{localStorage.setItem("soppiya_combo", JSON.stringify(this.state))};
        this.populateSate = async() =>{try{this.state = JSON.parse(await localStorage.getItem("soppiya_combo"))}catch(err){return {data:{},filter:{}}}};
    }
}

/*
----------------------------------------------------------------
|Soppiya Flash CDN documentation v2.1                          |
----------------------------------------------------------------
|Please select the data specifically needed for your use case. |
|Rendering unused/unwanted data may result in a slow data load.|
----------------------------------------------------------------

Data Object Instruction [new Flash(businessId).state.data]
-------------------------------------------------------------------------------------
|   property        |  Data type    |  Example Data     |   Output                  |
-------------------------------------------------------------------------------------
|   flashInfo       |   Object      |        --         |          --               |
|   -> name         |   Boolean     |   true. false     |   flash name              |
|   -> description  |   Boolean     |   true, false     |   flash description       |
|   -> start        |   Boolean     |   true, false     |   flash start time        |
|   -> end          |   Boolean     |   true, false     |   flash end time          |
|   -> cover        |   Boolean     |   true, false     |   flash cover             |
|   itemInfo        |   Object      |        --         |          --               |
|   -> name         |   Boolean     |   true, false     |   flash items name        |
|   -> image        |   Boolean     |   true. false     |   flash items image       |
|   -> price        |   Boolean     |   true. false     |   flash items price       |
|   -> rating       |   Boolean     |   true. false     |   flash items rating      |
|   -> slug         |   Boolean     |   true. false     |   flash items slug        |
-------------------------------------------------------------------------------------

Filter Object Instruction [new Flash(businessId).state.filter]
---------------------------------------------------------------------------------
|   property    |  Data type    |  Example Data     |   Output                  |
---------------------------------------------------------------------------------
|   skip        |   Number      |   0,1,2...10      |   X results are skipped   |
|   limit       |   Number      |   0,1,2...10      |   X number of results     |
---------------------------------------------------------------------------------

*/

class Flash {
    constructor(businessId) {
        this.businessId = businessId;
        this.baseURL = `https://api.soppiya.com/v2.1/site/widget/flash`;
        this.state = {
            data: {
                flashInfo: {name: true, description: true, start: true, end: true, cover:true},
                itemInfo:{name: true, image: true, price: true, rating: true, slug: true}
            },
            filter:{skip: 0, limit: null, items: []}
        },
        this.getFlash = async () => {
            try {
                let selectedData = new FormData();
                selectedData.append("data", JSON.stringify(this.state.data));
                selectedData.append("filter", JSON.stringify(this.state.filter));
                let response = null;
                response = await fetch(this.baseURL, { method: "post", headers: { "businessid": this.businessId }, body: selectedData });
                response = await response.json();
                if(response.Error) throw new Error()
                return response;
            } catch (e) { return {} };
        };
        this.saveState = async() =>{localStorage.setItem("soppiya_flash", JSON.stringify(this.state))};
        this.populateSate = async() =>{try{this.state = JSON.parse(await localStorage.getItem("soppiya_flash"))}catch(err){return {data:{},filter:{},sort:{}}}};
    }
}

/*
----------------------------------------------------------------
|Soppiya Item CDN documentation v2.1                           |
----------------------------------------------------------------
|Please select the data specifically needed for your use case. |
|Rendering unused/unwanted data may result in a slow data load.|
----------------------------------------------------------------

Data Object Instruction [new Item(businessId).state.data]
-----------------------------------------------------------------------------------------
|   property            |  Data type    |  Example Data     |   Output                  |
-----------------------------------------------------------------------------------------
|   name                |   Boolean     |   true, false     |   item name               |
|   description         |   Boolean     |   true, false     |   item description        |
|   shortDescription    |   Boolean     |   true, false     |   item meta description   |
|   type                |   Boolean     |   true, false     |   item type               |
|   unit                |   Boolean     |   true, false     |   item unit               |
|   category            |   Boolean     |   true, false     |   item category           |
|   images              |   Number      |   0,1,2,..,10     |   item images             |
|   video               |   Boolean     |   true, false     |   item video              |
|   slug                |   Boolean     |   true, false     |   item slug               |
|   createdAt           |   Boolean     |   true, false     |   item create time        |
|   review              |   Boolean     |   true, false     |   item review             |
|   shippingInfo        |   Boolean     |   true, false     |   item shipping data      |
|   refundInfo          |   Boolean     |   true, false     |   item refund data        |
-----------------------------------------------------------------------------------------

*/

class Item {
    constructor(businessId) {
        this.businessId = businessId;
        this.baseURL = `https://api.soppiya.com/v2.1/site/widget/item/`;
        this.state = {
            data: { name: true, description: true, shortDescription: true, type: true, unit: true, category: true, images: 1, video: true, slug: true, createdAt: true, review: true, shippingInfo: true, refundInfo: true}
        },
        this.getItem = async (handle) => {
            try {
                let selectedData = new FormData();
                selectedData.append("data", JSON.stringify(this.state.data));
                let response = null;
                response = await fetch(this.baseURL + handle, { method: "post", headers: { "businessid": this.businessId }, body: selectedData });
                response = await response.json();
                if(response.Error) throw new Error()
                return response;
            } catch (e) { return {} };
        };
        this.saveState = async() =>{localStorage.setItem("soppiya_item", JSON.stringify(this.state))};
        this.populateSate = async() =>{try{this.state = JSON.parse(await localStorage.getItem("soppiya_item"))}catch(err){return {data:{},filter:{},sort:{}}}};
    }
}

/*
----------------------------------------------------------------
|Soppiya Items CDN documentation v2.1                          |
----------------------------------------------------------------
|Please select the data specifically needed for your use case. |
|Rendering unused/unwanted data may result in a slow data load.|
----------------------------------------------------------------

Data Object Instruction [new Items(businessId).state.data]
---------------------------------------------------------------------------------
|   property    |  Data type    |  Example Data     |   Output                  |
---------------------------------------------------------------------------------
|   count       |   Boolean     |   true, false     |   items count for query   |
|   name        |   Boolean     |   true. false     |   item name               |
|   price       |   Boolean     |   true, false     |   item price              |
|   rating      |   Boolean     |   true, false     |   item rating             |
|   flashData   |   Boolean     |   true, false     |   item flash data         |
|   hasVariant  |   Boolean     |   true, false     |   if item has varient     |
|   slug        |   Boolean     |   true, false     |   item slug               |
|   createdAt   |   Boolean     |   true, false     |   item creation time      |
|   image       |   Number      |   0,1,2,.. 10     |   item image              |
---------------------------------------------------------------------------------

Filter Object Instruction [new Items(businessId).state.filter]
---------------------------------------------------------------------------------
|   property    |  Data type    |  Example Data     |   Output                  |
---------------------------------------------------------------------------------
|   skip        |   Number      |   0,1,2...10      |   X results are skipped   |
|   limit       |   Number      |   0,1,2...10      |   X number of results     |
|   categories  |   Array       |   ["cid1","cid2"] |   limited by categorie(s) |
|   search      |   String      |   item name       |   search by item name     |
|   minRating   |   Number      |   4, 3.5, 5       |   items by min rating     |
|   items       |   Array       |   ["iid1","iid2"] |   specific items          |
|   inStock     |   Boolean     |   true, false     |   items with stock        |
|   stockOut    |   Boolean     |   true, false     |   items with no stock     |
|   preOrder    |   Boolean     |   true, false     |   items with pre-order    |
|   priceRange  |   Object      |        --         |           --              |
|   -> min      |   Number      |   50000, null     |   items with min price    |
|   -> max      |   Number      |   51000, null     |   items with max price    |
---------------------------------------------------------------------------------

Sort Object Instruction [new Items(businessId).state.sort]
---------------------------------------------------------------------------------
|   property    |  Data type    |  Example Data     |   Output                  |
---------------------------------------------------------------------------------
|   price       |   String      |   "HTL", "LTH"    |   sort by price           |
|   name        |   String      |   "ATZ", "ZTA"    |   sort by name            |
|   upload      |   String      |   "NTO", "OTN"    |   sort by upload time     |
|   rating      |   String      |   "5T0", "0T5"    |   sort by sating          |
---------------------------------------------------------------------------------

*/
class Items {
    constructor(businessId) {
        this.businessId = businessId;
        this.baseURL = `https://api.soppiya.com/v2.1/site/widget/items`;
        this.state = {
            data: { count: true, name: true, price: true, rating: true, flashData: true, hasVariant: true, slug: true, createdAt: true, image: 2 },
            filter: { skip: 0, limit: 10, categories: [], priceRange: { min: 0, max: 0 }, search: "", minRating: 0, items: [], inStock: false, stockOut: false, preOrder: false },
            sort: { price: "HTL", name: "ATZ", upload: "NTO", rating: "5T0" }
        },
        this.getItems = async () => {
            try {
                let selectedData = new FormData();
                selectedData.append("data", JSON.stringify(this.state.data));
                selectedData.append("filter", JSON.stringify(this.state.filter));
                selectedData.append("sort", JSON.stringify(this.state.sort));
                let response = null;
                response = await fetch(this.baseURL, { method: "post", headers: { "businessid": this.businessId }, body: selectedData });
                response = await response.json();
                if(response.Error) throw new Error()
                return response;
            } catch (e) { return {} };
        };
        this.getRelatedItems = async (handle) => {
            try {
                let selectedData = new FormData();
                selectedData.append("data", JSON.stringify(this.state.data));
                selectedData.append("filter", JSON.stringify(this.state.filter));
                let response = null;
                response = await fetch(this.baseURL + "/related/" + handle, { method: "post", headers: { "businessid": this.businessId }, body: selectedData });
                response = await response.json();
                if(response.Error) throw new Error()
                return response;
            } catch (e) { return {} };
        };
        this.saveState = async() =>{localStorage.setItem("soppiya_items", JSON.stringify(this.state))};
        this.populateSate = async() =>{try{this.state = JSON.parse(await localStorage.getItem("soppiya_items"))}catch(err){return {data:{},filter:{},sort:{}}}};
    }
}

/*
----------------------------------------------------------------
|Soppiya Review CDN documentation v2.1                         |
----------------------------------------------------------------
|Please select the data specifically needed for your use case. |
|Rendering unused/unwanted data may result in a slow data load.|
----------------------------------------------------------------

Data Object Instruction [new Category(businessId).state.data]
-------------------------------------------------------------------------------------
|   property        |  Data type    |  Example Data     |   Output                  |
-------------------------------------------------------------------------------------
|   count           |   Boolean     |   true, false     |   number of reviews       |
|   score           |   Boolean     |   true. false     |   avarage rating          |
|   countByRating   |   Boolean     |   true, false     |   rating count by rating  |
-------------------------------------------------------------------------------------

Filter Object Instruction [new Category(businessId).state.filter]
---------------------------------------------------------------------------------
|   property    |  Data type    |  Example Data     |   Output                  |
---------------------------------------------------------------------------------
|   skip        |   Number      |   0,1,2...10      |   X results are skipped   |
|   limit       |   Number      |   0,1,2...10      |   X number of results     |
---------------------------------------------------------------------------------

Sort Object Instruction [new Category(businessId).state.sort]
---------------------------------------------------------------------------------
|   property    |  Data type    |  Example Data     |   Output                  |
---------------------------------------------------------------------------------
|   name        |   String      |   "ATZ", "ZTA"    |   sort by name            |
|   time        |   String      |   "NTO", "OTN"    |   sort by review time     |
|   rating      |   String      |   "5T0", "0T5"    |   sort by rating          |
---------------------------------------------------------------------------------

*/

class Review {
    constructor(businessId) {
        this.businessId = businessId;
        this.baseURL = `https://api.soppiya.com/v2.1/site/widget/review/`;
        this.state = {
            data: { count: true, score: true, countByRating: true }, 
            sort: { time: "OTN", rating: "5T0"},
            filter: { skip: 0, limit: 0}
        },
        this.getReview = async (handle) => {
            try {
                let selectedData = new FormData();
                selectedData.append("data", JSON.stringify(this.state.data));
                selectedData.append("sort", JSON.stringify(this.state.sort));
                selectedData.append("filter", JSON.stringify(this.state.filter));
                let response = null;
                response = await fetch(this.baseURL + handle, { method: "post", headers: { "businessid": this.businessId }, body: selectedData });
                response = await response.json();
                if(response.Error) throw new Error()
                return response;
            } catch (e) { return {} };
        };
        this.saveState = async() =>{localStorage.setItem("soppiya_review", JSON.stringify(this.state))};
        this.populateSate = async() =>{try{this.state = JSON.parse(await localStorage.getItem("soppiya_review"))}catch(err){return {data:{},filter:{},sort:{}}}};
    }
}