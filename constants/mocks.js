const categories = [
    {
      id: "search",
      name: "Tìm kiếm nhanh",
      tags: ["products", "inspirations"],
      count: 100,
      image: require("../assets/icons/search.png")
    },
    {
      id: "post",
      name: "Đăng bài",
      tags: ["products", "shop"],
      count: 16,
      image: require("../assets/icons/post.png")
    },
    {
      id: "rewards",
      name: "Ưu đãi",
      tags: ["products", "inspirations"],
      count: 68,
      image: require("../assets/icons/rewards.png")
    },
    {
      id: "share",
      name: "Chia sẻ bạn bè",
      tags: ["products", "shop"],
      count: 17,
      image: require("../assets/icons/share.png")
    },
    {
      id: "rate",
      name: "Đánh giá ứng dụng",
      tags: ["products", "shop"],
      count: 47,
      image: require("../assets/icons/rate.png")
    },
    {
      id: "contact",
      name: "Hỗ trợ kỹ thuật",
      tags: ["products", "shop"],
      count: 47,
      image: require("../assets/icons/contact.png")
    }
  ];
  
  const products = [
    {
      id: 1,
      name: "16 Best Plants That Thrive In Your Bedroom",
      description:
        "Bedrooms deserve to be decorated with lush greenery just like every other room in the house – but it can be tricky to find a plant that thrives here. Low light, high humidity and warm temperatures mean only certain houseplants will flourish.",
      tags: ["Interior", "27 m²", "Ideas"],
      images: [
        require("../assets/images/plants_1.png"),
        require("../assets/images/plants_2.png"),
        require("../assets/images/plants_3.png"),
        // showing only 3 images, show +6 for the rest
        require("../assets/images/plants_1.png"),
        require("../assets/images/plants_2.png"),
        require("../assets/images/plants_3.png"),
        require("../assets/images/plants_1.png"),
        require("../assets/images/plants_2.png"),
        require("../assets/images/plants_3.png")
      ]
    }
  ];
  
  
  const explore = [
    // images
    require("../assets/images/explore_1.png"),
    require("../assets/images/explore_2.png"),
    require("../assets/images/explore_3.png"),
    require("../assets/images/explore_4.png"),
    require("../assets/images/explore_5.png"),
    require("../assets/images/explore_6.png")
  ];
  
  const profile = {
    username: "Võ Nguyễn Đình Trí",
    location: "Đà Nẵng",
    email: "dinhtrivonguyen@gmail.com",
    avatar: require("../assets/images/avatar.png"),
    budget: 1000,
    monthly_cap: 5000,
    notifications: true,
    newsletter: false
  };
  
  export { categories, explore, products, profile };