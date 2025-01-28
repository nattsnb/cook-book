import { PageWidthContainer } from "../../shared/components/PageWidthContainer.tsx";
import {
  StyledButtonContainer,
  StyledCategoriesContainer,
  StyledCategoriesImageLink,
  StyledButtonLikeImageLink,
  StyledKitchenPictureContainer,
  StyledMainBody,
} from "./MainView.styled.tsx";
import addButton from "../../images/addButton.png";
import browseButton from "../../images/browseButton.png";
import mainImg from "../../images/main.png";
import soupsImg from "../../images/soups.png";
import dessertsImg from "../../images/Desserts.png";
import saladsImg from "../../images/salads.png";
import drinksImg from "../../images/drinks.png";
import breakfastImg from "../../images/breakfast.png";

interface CategoryButton {
  alt: string;
  href: string;
  src: string;
  className: string;
  id: number;
}

type CategoryButtons = CategoryButton[];

const categoryButtons: CategoryButtons = [
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

export function MainView() {
  return (
    <PageWidthContainer>
      <StyledKitchenPictureContainer />
      <StyledMainBody>
        <StyledButtonContainer>
          <StyledButtonLikeImageLink
            alt="Add new recipe"
            href="/newRecipeForm/"
            src={addButton}
            className={"StyledFunctionButtonLikeImageLink"}
          />
          <StyledButtonLikeImageLink
            alt="Browse all recipes"
            href="/category/:category0"
            src={browseButton}
            className={"StyledFunctionButtonLikeImageLink"}
          />
        </StyledButtonContainer>
        <StyledCategoriesContainer>
          {categoryButtons.map((categoryButton) => (
            <StyledCategoriesImageLink
              key={categoryButton.id}
              alt={categoryButton.alt}
              href={categoryButton.href}
              src={categoryButton.src}
              className={categoryButton.className}
            />
          ))}
        </StyledCategoriesContainer>
      </StyledMainBody>
    </PageWidthContainer>
  );
}
