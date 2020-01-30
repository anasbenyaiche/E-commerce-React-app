import React from "react";
import "./directory.style.scss";
import MenuItem from "../menu-item/menu-item.component";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "Hats",
          linkURL: "hats",
          imageURL:
            "https://images.unsplash.com/photo-1533055640609-24b498dfd74c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
          id: 1
        },
        {
          title: "Jackets",
          linkURL: "jackets",
          imageURL:
            "https://images.unsplash.com/photo-1509539662397-116cb90542f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
          id: 2
        },
        {
          title: "Sneakers",
          linkURL: "sneakers",
          imageURL:
            "https://images.unsplash.com/photo-1524010349062-860def6649c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
          id: 3
        },
        {
          title: "Women",
          linkURL: "womens",
          imageURL:
            "https://images.unsplash.com/photo-1495516372021-9c815fa7e668?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
          id: 4,
          size: "large"
        },
        {
          title: "Men",
          linkURL: "mens",
          imageURL:
            "https://images.unsplash.com/photo-1574933408994-6f0539cab5df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1023&q=80",
          id: 5,
          size: "large"
        }
      ]
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {/* ...otherSctionProps is similar to destructing the object 
        {this.state.sections.map(({ title, size, imageURL, linkURL, id }) => (
          <MenuItem
            key={id}
            title={title}
            imageURL={imageURL}
            linkURL={linkURL}
            size={size}
          />
        ))} */}
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem {...otherSectionProps} />
        ))}
      </div>
    );
  }
}
export default Directory;
