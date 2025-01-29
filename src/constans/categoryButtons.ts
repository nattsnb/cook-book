import browseButton from "../images/browseButton.png";
import mainImg from "../images/main.png";
import soupsImg from "../images/soups.png";
import saladsImg from "../images/salads.png";
import drinksImg from "../images/drinks.png";
import dessertsImg from "../images/desserts.png";
import breakfastImg from "../images/breakfast.png";

interface CategoryButton {
  alt: string;
  href: string;
  src: string;
  className: string;
  id: number;
}

type CategoryButtons = CategoryButton[];

export const CATEGORY_BUTTONS: CategoryButtons = [
  {
    id: 0,
    alt: "browse all recipes",
    href: "/category/:0",
    src: browseButton,
    className: "StyledButtonLikeImageLink",
  },
  {
    id: 1,
    alt: "main courses",
    href: "/category/:1",
    src: mainImg,
    className: "StyledCategoryImageLink",
  },
  {
    id: 2,
    alt: "soups",
    href: "/category/:2",
    src: soupsImg,
    className: "StyledCategoryImageLink",
  },
  {
    id: 3,
    alt: "salads",
    href: "/category/:3",
    src: saladsImg,
    className: "StyledCategoryImageLink",
  },
  {
    id: 4,
    alt: "drinks",
    href: "/category/:4",
    src: drinksImg,
    className: "StyledCategoryImageLink",
  },
  {
    id: 5,
    alt: "desserts",
    href: "/category/:5",
    src: dessertsImg,
    className: "StyledCategoryImageLink",
  },
  {
    id: 6,
    alt: "breakfast",
    href: "/category/:6",
    src: breakfastImg,
    className: "StyledCategoryImageLink",
  },
];
