export interface Articles {
    URL: string,
    Title: string;
    Text: string
    Picture: string;
    Date: string;
}
export const sampleArticles = [
    {
        URL: "https://www.lipsum.com/",
        Title: "Lorem Ipsum",
        Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer efficitur dui non dolor interdum, id blandit ex accumsan. Curabitur ut luctus nunc. Nullam lorem sapien, porta non ex a, elementum maximus libero. Sed vulputate nisi id nisi maximus condimentum. Vivamus cursus, tortor id varius aliquet, mauris felis dictum enim, at commodo sapien mi vel quam. Sed arcu libero, malesuada ut sagittis sed, eleifend ullamcorper urna. Nunc ut turpis quis neque imperdiet auctor a non arcu. Nunc sed posuere lectus, ut commodo enim. Vivamus id dui venenatis arcu mattis sagittis. Aliquam quis nisl dui. Nullam luctus enim in sapien fringilla, vitae cursus nulla finibus. Vestibulum sodales posuere tellus vel maximus. Fusce a odio aliquet mi sagittis placerat ut fringilla purus. Nam condimentum diam libero, eu ornare enim aliquam nec.",
        Picture: "https://images.thedirect.com/media/article_full/gumball.jpg",
        Date: "10 May 2023"
    },
    {
        URL: "https://en.wikipedia.org/wiki/Hello",
        Title: "Hello",
        Text: "Hello, with that spelling, was used in publications in the U.S. as early as the 18 October 1826 edition of the Norwich Courier of Norwich, Connecticut.[1] Another early use was an 1833 American book called The Sketches and Eccentricities of Col. David Crockett, of West Tennessee,[2] which was reprinted that same year in The London Literary Gazette.[3] The word was extensively used in literature by the 1860s.[4]",
        Picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/TelephoneHelloNellie.jpg/330px-TelephoneHelloNellie.jpg",
        Date: "13 June 2023"
    },
    {
        URL: "https://en.wikipedia.org/wiki/Alexander_the_Great",
        Title: "Alexander The Great",
        Text: "Alexander III of Macedon (Ancient Greek: Ἀλέξανδρος, romanized: Alexandros; 20/21 July 356 BC – 10/11 June 323 BC), commonly known as Alexander the Great,[a] was a king of the ancient Greek kingdom of Macedon.[a] He succeeded his father Philip II to the throne in 336 BC at the age of 20, and spent most of his ruling years conducting a lengthy military campaign throughout Western Asia and Egypt. By the age of 30, he had created one of the largest empires in history, stretching from Greece to northwestern India.[2] He was undefeated in battle and is widely considered to be one of history's greatest and most successful military commanders",
        Picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Alexander_the_Great_mosaic_%28cropped%29.jpg/330px-Alexander_the_Great_mosaic_%28cropped%29.jpg",
        Date: "5 July 2023"
    }
];