import browseButton from "../images/browseButton.png";
import mainImg from "../images/main.png";
import soupsImg from "../images/soups.png";
import saladsImg from "../images/salads.png";
import drinksImg from "../images/drinks.png";
import dessertsImg from "../images/desserts.png";
import breakfastImg from "../images/breakfast.png";

interface Category {
  alt: string;
  href: string;
  src: string;
  className: string;
  id: number;
}

type Categories = Category[];

export const CATEGORIES: Categories = [
  {
    id: 0,
    alt: "All Recipes",
    href: "/category/:0",
    src: browseButton,
    className: "StyledButtonLikeImageLink",
  },
  {
    id: 1,
    alt: "Main Courses",
    href: "/category/:1",
    src: mainImg,
    className: "StyledCategoryImageLink",
  },
  {
    id: 2,
    alt: "Soups",
    href: "/category/:2",
    src: soupsImg,
    className: "StyledCategoryImageLink",
  },
  {
    id: 3,
    alt: "Salads",
    href: "/category/:3",
    src: saladsImg,
    className: "StyledCategoryImageLink",
  },
  {
    id: 4,
    alt: "Drinks",
    href: "/category/:4",
    src: drinksImg,
    className: "StyledCategoryImageLink",
  },
  {
    id: 5,
    alt: "Desserts",
    href: "/category/:5",
    src: dessertsImg,
    className: "StyledCategoryImageLink",
  },
  {
    id: 6,
    alt: "Breakfasts",
    href: "/category/:6",
    src: breakfastImg,
    className: "StyledCategoryImageLink",
  },
];
