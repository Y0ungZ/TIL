type PageInfo = {
  title: string;
};

type Page = "home" | "about" | "contact";

//map같은 역할
const nav: Record<Page, PageInfo> = {
  home: { title: "Home" },
  about: { title: "About" },
  contact: { title: "Contact" },
};

//다른 재미있는 유틸리티 타입들.
type Product = "cat" | "dog";
type NewProduct = Capitalize<Product>; //'Cat' | 'Dog'
