export type Article = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  content: string;
  tags: string[];
  image?: string;
};

export const ARTICLES: Article[] = [
  {
    id: "ip-ignite-grand-finale",
    title: "IP Ignite Grand Finale",
    excerpt: "The venue was buzzing with energy as students from...",
    date: "01 Aug 2025",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis massa et est rutrum mollis eu et nisi. Nam sit amet lectus ut lectus convallis sagittis. Vestibulum eu rutrum sem. Quisque tempor nulla ac dui mattis, vitae tempus dolor fermentum. Donec vitae nulla faucibus libero posuere convallis auctor tincidunt velit. Curabitur lorem libero, eleifend ac velit et, pharetra imperdiet enim. Integer turpis orci, elementum a placerat eget, cursus sed lacus. Praesent laoreet massa dolor, eu congue arcu vehicula sed. Curabitur eleifend eget justo vel ullamcorper. In hac habitasse platea dictumst. Maecenas elementum dapibus maximus. Phasellus ac orci ut nunc aliquet luctus. Maecenas lacinia, velit ac varius porta, arcu quam aliquam eros, rutrum tristique dolor lacus et ipsum. In congue metus id fringilla pharetra. Morbi convallis hendrerit leo id commodo. In tortor orci, ullamcorper vel libero et, imperdiet mattis sem. Nunc dictum est vel sem eleifend, sit amet dapibus nulla convallis. Aliquam finibus nisi porta gravida viverra. Nulla non lorem erat. Aenean vel augue tincidunt, congue nisl nec, cursus diam. Curabitur pulvinar leo lacinia sapien lobortis sollicitudin. Mauris ultricies nisl vel arcu ornare condimentum. Sed finibus lacinia enim et tempus. Mauris vitae dignissim nisi. Pellentesque a mi non purus eleifend suscipit. Integer accumsan felis in tempor mattis. Phasellus a sapien non nunc maximus elementum. Sed sodales eget est non accumsan. Nullam finibus sit amet nibh et accumsan. Nam quis condimentum enim. Sed iaculis nisl ipsum, at pretium dolor auctor a.",
    tags: ["Competition", "Networking", "Partnership"],
    image: "/images/articles/ip-ignite.webp",
  },
  {
    id: "sparkhub-partnership",
    title: "SPARK HUB New Partnership",
    excerpt: "SPARK HUB officially welcomes a new strategic partner...",
    date: "20 Jul 2025",
    content:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis massa et est rutrum mollis eu et nisi. Nam sit amet lectus ut lectus convallis sagittis. Vestibulum eu rutrum sem. Quisque tempor nulla ac dui mattis, vitae tempus dolor fermentum. Donec vitae nulla faucibus libero posuere convallis auctor tincidunt velit. Curabitur lorem libero, eleifend ac velit et, pharetra imperdiet enim. Integer turpis orci, elementum a placerat eget, cursus sed lacus. Praesent laoreet massa dolor, eu congue arcu vehicula sed. Curabitur eleifend eget justo vel ullamcorper. In hac habitasse platea dictumst. Maecenas elementum dapibus maximus. Phasellus ac orci ut nunc aliquet luctus. Maecenas lacinia, velit ac varius porta, arcu quam aliquam eros, rutrum tristique dolor lacus et ipsum. In congue metus id fringilla pharetra. Morbi convallis hendrerit leo id commodo. In tortor orci, ullamcorper vel libero et, imperdiet mattis sem. Nunc dictum est vel sem eleifend, sit amet dapibus nulla convallis. Aliquam finibus nisi porta gravida viverra. Nulla non lorem erat. Aenean vel augue tincidunt, congue nisl nec, cursus diam. Curabitur pulvinar leo lacinia sapien lobortis sollicitudin. Mauris ultricies nisl vel arcu ornare condimentum. Sed finibus lacinia enim et tempus. Mauris vitae dignissim nisi. Pellentesque a mi non purus eleifend suscipit. Integer accumsan felis in tempor mattis. Phasellus a sapien non nunc maximus elementum. Sed sodales eget est non accumsan. Nullam finibus sit amet nibh et accumsan. Nam quis condimentum enim. Sed iaculis nisl ipsum, at pretium dolor auctor a.",
    tags: ["Announcement", "Partnership"],
    image: "/images/articles/partnership.webp",
  },
  {
    id: "student-achievement",
    title: "Student Innovation Achievement",
    excerpt: "A student-led project reaches a national milestone...",
    date: "10 Jul 2025",
    content:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis massa et est rutrum mollis eu et nisi. Nam sit amet lectus ut lectus convallis sagittis. Vestibulum eu rutrum sem. Quisque tempor nulla ac dui mattis, vitae tempus dolor fermentum. Donec vitae nulla faucibus libero posuere convallis auctor tincidunt velit. Curabitur lorem libero, eleifend ac velit et, pharetra imperdiet enim. Integer turpis orci, elementum a placerat eget, cursus sed lacus. Praesent laoreet massa dolor, eu congue arcu vehicula sed. Curabitur eleifend eget justo vel ullamcorper. In hac habitasse platea dictumst. Maecenas elementum dapibus maximus. Phasellus ac orci ut nunc aliquet luctus. Maecenas lacinia, velit ac varius porta, arcu quam aliquam eros, rutrum tristique dolor lacus et ipsum. In congue metus id fringilla pharetra. Morbi convallis hendrerit leo id commodo. In tortor orci, ullamcorper vel libero et, imperdiet mattis sem. Nunc dictum est vel sem eleifend, sit amet dapibus nulla convallis. Aliquam finibus nisi porta gravida viverra. Nulla non lorem erat. Aenean vel augue tincidunt, congue nisl nec, cursus diam. Curabitur pulvinar leo lacinia sapien lobortis sollicitudin. Mauris ultricies nisl vel arcu ornare condimentum. Sed finibus lacinia enim et tempus. Mauris vitae dignissim nisi. Pellentesque a mi non purus eleifend suscipit. Integer accumsan felis in tempor mattis. Phasellus a sapien non nunc maximus elementum. Sed sodales eget est non accumsan. Nullam finibus sit amet nibh et accumsan. Nam quis condimentum enim. Sed iaculis nisl ipsum, at pretium dolor auctor a.",
    tags: ["Achievement", "Event"],
    image: "/images/articles/achievement.webp",
  },
  {
    id: "student-achievem",
    title: "Student Innovation Achievement",
    excerpt: "A student-led project reaches a national milestone...",
    date: "10 Jul 2025",
    content:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis massa et est rutrum mollis eu et nisi. Nam sit amet lectus ut lectus convallis sagittis. Vestibulum eu rutrum sem. Quisque tempor nulla ac dui mattis, vitae tempus dolor fermentum. Donec vitae nulla faucibus libero posuere convallis auctor tincidunt velit. Curabitur lorem libero, eleifend ac velit et, pharetra imperdiet enim. Integer turpis orci, elementum a placerat eget, cursus sed lacus. Praesent laoreet massa dolor, eu congue arcu vehicula sed. Curabitur eleifend eget justo vel ullamcorper. In hac habitasse platea dictumst. Maecenas elementum dapibus maximus. Phasellus ac orci ut nunc aliquet luctus. Maecenas lacinia, velit ac varius porta, arcu quam aliquam eros, rutrum tristique dolor lacus et ipsum. In congue metus id fringilla pharetra. Morbi convallis hendrerit leo id commodo. In tortor orci, ullamcorper vel libero et, imperdiet mattis sem. Nunc dictum est vel sem eleifend, sit amet dapibus nulla convallis. Aliquam finibus nisi porta gravida viverra. Nulla non lorem erat. Aenean vel augue tincidunt, congue nisl nec, cursus diam. Curabitur pulvinar leo lacinia sapien lobortis sollicitudin. Mauris ultricies nisl vel arcu ornare condimentum. Sed finibus lacinia enim et tempus. Mauris vitae dignissim nisi. Pellentesque a mi non purus eleifend suscipit. Integer accumsan felis in tempor mattis. Phasellus a sapien non nunc maximus elementum. Sed sodales eget est non accumsan. Nullam finibus sit amet nibh et accumsan. Nam quis condimentum enim. Sed iaculis nisl ipsum, at pretium dolor auctor a.",
    tags: ["Achievement", "Event"],
    image: "/images/articles/achievement.webp",
  },
  {
    id: "student-achievemen",
    title: "Student Innovation Achievement",
    excerpt: "A student-led project reaches a national milestone...",
    date: "10 Jul 2025",
    content:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis massa et est rutrum mollis eu et nisi. Nam sit amet lectus ut lectus convallis sagittis. Vestibulum eu rutrum sem. Quisque tempor nulla ac dui mattis, vitae tempus dolor fermentum. Donec vitae nulla faucibus libero posuere convallis auctor tincidunt velit. Curabitur lorem libero, eleifend ac velit et, pharetra imperdiet enim. Integer turpis orci, elementum a placerat eget, cursus sed lacus. Praesent laoreet massa dolor, eu congue arcu vehicula sed. Curabitur eleifend eget justo vel ullamcorper. In hac habitasse platea dictumst. Maecenas elementum dapibus maximus. Phasellus ac orci ut nunc aliquet luctus. Maecenas lacinia, velit ac varius porta, arcu quam aliquam eros, rutrum tristique dolor lacus et ipsum. In congue metus id fringilla pharetra. Morbi convallis hendrerit leo id commodo. In tortor orci, ullamcorper vel libero et, imperdiet mattis sem. Nunc dictum est vel sem eleifend, sit amet dapibus nulla convallis. Aliquam finibus nisi porta gravida viverra. Nulla non lorem erat. Aenean vel augue tincidunt, congue nisl nec, cursus diam. Curabitur pulvinar leo lacinia sapien lobortis sollicitudin. Mauris ultricies nisl vel arcu ornare condimentum. Sed finibus lacinia enim et tempus. Mauris vitae dignissim nisi. Pellentesque a mi non purus eleifend suscipit. Integer accumsan felis in tempor mattis. Phasellus a sapien non nunc maximus elementum. Sed sodales eget est non accumsan. Nullam finibus sit amet nibh et accumsan. Nam quis condimentum enim. Sed iaculis nisl ipsum, at pretium dolor auctor a.",
    tags: ["Achievement", "Event"],
    image: "/images/articles/achievement.webp",
  },
  {
    id: "student-achieveme",
    title: "Student Innovation Achievement",
    excerpt: "A student-led project reaches a national milestone...",
    date: "10 Jul 2025",
    content:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis massa et est rutrum mollis eu et nisi. Nam sit amet lectus ut lectus convallis sagittis. Vestibulum eu rutrum sem. Quisque tempor nulla ac dui mattis, vitae tempus dolor fermentum. Donec vitae nulla faucibus libero posuere convallis auctor tincidunt velit. Curabitur lorem libero, eleifend ac velit et, pharetra imperdiet enim. Integer turpis orci, elementum a placerat eget, cursus sed lacus. Praesent laoreet massa dolor, eu congue arcu vehicula sed. Curabitur eleifend eget justo vel ullamcorper. In hac habitasse platea dictumst. Maecenas elementum dapibus maximus. Phasellus ac orci ut nunc aliquet luctus. Maecenas lacinia, velit ac varius porta, arcu quam aliquam eros, rutrum tristique dolor lacus et ipsum. In congue metus id fringilla pharetra. Morbi convallis hendrerit leo id commodo. In tortor orci, ullamcorper vel libero et, imperdiet mattis sem. Nunc dictum est vel sem eleifend, sit amet dapibus nulla convallis. Aliquam finibus nisi porta gravida viverra. Nulla non lorem erat. Aenean vel augue tincidunt, congue nisl nec, cursus diam. Curabitur pulvinar leo lacinia sapien lobortis sollicitudin. Mauris ultricies nisl vel arcu ornare condimentum. Sed finibus lacinia enim et tempus. Mauris vitae dignissim nisi. Pellentesque a mi non purus eleifend suscipit. Integer accumsan felis in tempor mattis. Phasellus a sapien non nunc maximus elementum. Sed sodales eget est non accumsan. Nullam finibus sit amet nibh et accumsan. Nam quis condimentum enim. Sed iaculis nisl ipsum, at pretium dolor auctor a.",
    tags: ["Achievement", "Event"],
    image: "/images/articles/achievement.webp",
  },
  {
    id: "student-achie",
    title: "Student Innovation Achievement",
    excerpt: "A student-led project reaches a national milestone...",
    date: "10 Jul 2025",
    content:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis massa et est rutrum mollis eu et nisi. Nam sit amet lectus ut lectus convallis sagittis. Vestibulum eu rutrum sem. Quisque tempor nulla ac dui mattis, vitae tempus dolor fermentum. Donec vitae nulla faucibus libero posuere convallis auctor tincidunt velit. Curabitur lorem libero, eleifend ac velit et, pharetra imperdiet enim. Integer turpis orci, elementum a placerat eget, cursus sed lacus. Praesent laoreet massa dolor, eu congue arcu vehicula sed. Curabitur eleifend eget justo vel ullamcorper. In hac habitasse platea dictumst. Maecenas elementum dapibus maximus. Phasellus ac orci ut nunc aliquet luctus. Maecenas lacinia, velit ac varius porta, arcu quam aliquam eros, rutrum tristique dolor lacus et ipsum. In congue metus id fringilla pharetra. Morbi convallis hendrerit leo id commodo. In tortor orci, ullamcorper vel libero et, imperdiet mattis sem. Nunc dictum est vel sem eleifend, sit amet dapibus nulla convallis. Aliquam finibus nisi porta gravida viverra. Nulla non lorem erat. Aenean vel augue tincidunt, congue nisl nec, cursus diam. Curabitur pulvinar leo lacinia sapien lobortis sollicitudin. Mauris ultricies nisl vel arcu ornare condimentum. Sed finibus lacinia enim et tempus. Mauris vitae dignissim nisi. Pellentesque a mi non purus eleifend suscipit. Integer accumsan felis in tempor mattis. Phasellus a sapien non nunc maximus elementum. Sed sodales eget est non accumsan. Nullam finibus sit amet nibh et accumsan. Nam quis condimentum enim. Sed iaculis nisl ipsum, at pretium dolor auctor a.",
    tags: ["Achievement", "Event"],
    image: "/images/articles/achievement.webp",
  },
];
