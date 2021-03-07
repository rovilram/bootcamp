const civilAircrafts = [
    'assets/avion-civil-1.jpg',
    'assets/avion-civil-2.jpg',
    'assets/avion-civil-3.jpg',
    'assets/avion-civil-4.jpg',
    'assets/avion-civil-5.jpg'
];

const militaryAircrafts = [
    'assets/avion-militar-1.jpg',
    'assets/avion-militar-2.jpg',
    'assets/avion-militar-3.jpg',
    'assets/avion-militar-4.jpg',
    'assets/avion-militar-5.jpg'
];

const civilHelicopters = [
    'assets/helicoptero-civil-1.jpg',
    'assets/helicoptero-civil-2.jpg',
    'assets/helicoptero-civil-3.jpg',
    'assets/helicoptero-civil-4.jpg',
    'assets/helicoptero-civil-5.jpg'
];

const militaryHelicopter = [
    'assets/helicoptero-militar-1.jpg',
    'assets/helicoptero-militar-2.jpg',
    'assets/helicoptero-militar-3.jpg',
    'assets/helicoptero-militar-4.jpg',
    'assets/helicoptero-militar-5.jpg'
];

class Gallery {
    constructor(civilImages, militaryImages) {
        this.civilImg = civilImages
        this.militaryImg = militaryImages
    }
    
    getRandomCivil() {
        let indexNum = Math.floor(Math.random() * this.civilImg.length)
        return this.civilImg[indexNum]
    }
    
    getRandomMilitary() {
        let indexNum = Math.floor(Math.random() * this.militaryImg.length)
        return this.militaryImg[indexNum]
    }
    
    getAll() {
        let combined = this.civilImg.concat(this.militaryImg)
        return combined
    }
}

class Painter {
    constructor() {
        this.createGallery()
    }

    createGallery() {
		if (this.gallery) this.gallery.remove()
        this.gallery = document.createElement("section")
        document.querySelector("body").appendChild(this.gallery)
    }

    createImageTag(imageUrl) {
        let pic = document.createElement("picture")
        let img = document.createElement("img")
        img.setAttribute("src", imageUrl)
        // img.src = imageUrl
        pic.appendChild(img)
        return pic
    }

    paintSingleImage(imageUrl) {
		this.deleteGallery();
        this.gallery.appendChild(this.createImageTag(imageUrl))
    }

    paintMultipleImages(arrayOfImages) {
		this.deleteGallery();
        arrayOfImages.map(image => this.gallery.appendChild(this.createImageTag(image)))
    }

	deleteGallery () {
		this.createGallery();
	}

}

const aircrafts = new Gallery(civilAircrafts, militaryAircrafts);
const helicopters = new Gallery(civilHelicopters, militaryHelicopter);
const painter = new Painter();