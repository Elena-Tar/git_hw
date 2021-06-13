class EmpTable {
    constructor(news_list) {
        this.news_list = news_list;
    }
    getHTML(obj) {
        let res = "";
        for (let i = 0; i < this.news_list.length; i++) {
            res += `
            <div class="my">Name: ${this.news_list[i].name}</div>
            <div class="my">Position: ${this.news_list[i].position}</div>
            <div class="my">Work experience: ${this.news_list[i].experience}</div>   
            <br>
            `;
        }
        obj.innerHTML = res;
    }
}