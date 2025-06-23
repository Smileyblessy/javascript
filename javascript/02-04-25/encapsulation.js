class FullStack {
    #courseName = "DRF";

    constructor() {
        this.#courseName = "Fullstack with Mean"; 
    }

    setCourseName(cname) {
        this.#courseName = cname;
    }

    getCourseName() {
        return this.#courseName;
    }
}

var c1 = new FullStack();
c1.setCourseName("MeanStack");
console.log(c1.getCourseName()); 
