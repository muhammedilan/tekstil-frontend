// get products
export const getProducts = (products, category, type, limit, id) => {
  if (products) {
    let p = [...products];
    if (type && type === "new") {
      return p.sort((a, b) => b.id - a.id).slice(0, limit ? limit : p.length);
    }
    if (type && type === "bestSeller") {
      return p
        .sort((a, b) => b.order_quantity - a.order_quantity)
        .slice(0, limit ? limit : p.length);
    }
    return p.slice(0, limit ? limit : p.length);
  }
};

// get product discount price
export const getDiscountPrice = (price, discount) => {
  return discount && discount > 0 ? price - price * (discount / 100) : null;
};

// get product cart quantity
export const getProductCartQuantity = (cartItems, product, color, size) => {
  let productInCart = cartItems.find(
    (single) =>
      single.id === product.id &&
      (single.selectedProductColor
        ? single.selectedProductColor === color
        : true) &&
      (single.selectedProductSize ? single.selectedProductSize === size : true)
  );
  if (cartItems.length >= 1 && productInCart) {
    if (product.variation) {
      return cartItems.find(
        (single) =>
          single.id === product.id &&
          single.selectedProductColor === color &&
          single.selectedProductSize === size
      ).quantity;
    } else {
      return cartItems.find((single) => product.id === single.id).quantity;
    }
  } else {
    return 0;
  }
};

export const cartItemStock = (item, color, size) => {
  if (item.stock) {
    return item.stock;
  } else {
    return item.variation
      .filter((single) => single.color === color)[0]
      .size.filter((single) => single.name === size)[0].stock;
  }
};

//get products based on category
export const getSortedProducts = (products, sortType, sortValue) => {
  if (sortType === "category" && sortValue) {
    var allProducts = [];
    products.map((product) => {
      product.category.map(
        (category) => category.id == sortValue && allProducts.push(product)
      );
    });
    return allProducts;
  }
  if (sortType === "collection") {
    return products.filter((p) => p.collection == sortValue);
  }
  if (sortType === "tag") {
    return products.filter(
      (product) => product.tag.filter((single) => single === sortValue)[0]
    );
  }
  if (sortType === "color" && sortValue) {
    var allProducts = [];
    products.map((product) => {
      product.color.map(
        (color) => color.id == sortValue && allProducts.push(product)
      );
    });
    return allProducts;
  }
  if (sortType === "size") {
    return products.filter(
      (product) =>
        product.variation &&
        product.variation.filter(
          (single) =>
            single.size.filter((single) => single.name === sortValue)[0]
        )[0]
    );
  }
  if (sortType === "filterSort") {
    let sortProducts = [...products];
    if (sortValue === "default") {
      return sortProducts;
    }
    if (sortValue === "priceHighToLow") {
      return sortProducts.sort((a, b) => {
        return b.price - a.price;
      });
    }
    if (sortValue === "priceLowToHigh") {
      return sortProducts.sort((a, b) => {
        return a.price - b.price;
      });
    }
  }

  return products;
};

// get individual element
const getIndividualItemArray = (array) => {
  let individualItemArray = array.filter(function (v, i, self) {
    return i === self.indexOf(v);
  });
  return individualItemArray;
};

// get individual categories
export const getIndividualCategories = (products) => {
  let productCategories = [];
  products?.map((p) => {
    p.category.map((c) => {
      if (productCategories.length > 0) {
        let isEqual = productCategories.find((pc) => pc.id == c.id);
        !isEqual && productCategories.push(c);
      } else {
        productCategories.push(c);
      }
    });
  });

  const individualProductCategories = getIndividualItemArray(productCategories);
  return individualProductCategories;
};

// get individual tags
export const getIndividualTags = (products) => {
  let productTags = [];
  products &&
    products.map((product) => {
      return (
        product.tag &&
        product.tag.map((single) => {
          return productTags.push(single);
        })
      );
    });
  const individualProductTags = getIndividualItemArray(productTags);
  return individualProductTags;
};

// get individual colors
export const getIndividualColors = (products) => {
  let productColors = [];
  products?.map((p) => {
    p.color?.map((c) => {
      if (productColors.length > 0) {
        let isEqual = productColors.find((pc) => pc.id == c.id);
        !isEqual && productColors.push(c);
      } else {
        productColors.push(c);
      }
    });
  });
  const individualProductColors = getIndividualItemArray(productColors);
  return individualProductColors;
};

// get individual sizes
export const getProductsIndividualSizes = (products) => {
  let productSizes = [];
  products &&
    products.map((product) => {
      return (
        product.variation &&
        product.variation.map((single) => {
          return single.size.map((single) => {
            return productSizes.push(single.name);
          });
        })
      );
    });
  const individualProductSizes = getIndividualItemArray(productSizes);
  return individualProductSizes;
};

// get product individual sizes
export const getIndividualSizes = (product) => {
  let productSizes = [];
  product.variation &&
    product.variation.map((singleVariation) => {
      return (
        singleVariation.size &&
        singleVariation.size.map((singleSize) => {
          return productSizes.push(singleSize.name);
        })
      );
    });
  const individualSizes = getIndividualItemArray(productSizes);
  return individualSizes;
};

export const setActiveSort = (e) => {
  const filterButtons = document.querySelectorAll(
    ".sidebar-widget-list-left button, .sidebar-widget-tag button, .product-filter button"
  );
  filterButtons.forEach((item) => {
    item.classList.remove("active");
  });
  e.currentTarget.classList.add("active");
};

export const setActiveLayout = (e) => {
  const gridSwitchBtn = document.querySelectorAll(".shop-tab button");
  gridSwitchBtn.forEach((item) => {
    item.classList.remove("active");
  });
  e.currentTarget.classList.add("active");
};

export const toggleShopTopFilter = (e) => {
  const shopTopFilterWrapper = document.querySelector(
    "#product-filter-wrapper"
  );
  shopTopFilterWrapper.classList.toggle("active");
  if (shopTopFilterWrapper.style.height) {
    shopTopFilterWrapper.style.height = null;
  } else {
    shopTopFilterWrapper.style.height =
      shopTopFilterWrapper.scrollHeight + "px";
  }
  e.currentTarget.classList.toggle("active");
};
