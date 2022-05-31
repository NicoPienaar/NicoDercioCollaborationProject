import { ReactPhotoCollage } from "react-photo-collage";

const setting = {
  width: "600px",
  height: ["340px", "170px"],
  layout: [1, 6],
  photos: [
    // { source: 'https://cdn.dribbble.com/users/3010014/screenshots/17878440/media/279f88cf30a1baba48a6c164746d8df0.jpg?compress=1&resize=320x240&vertical=top' },
    {
      source:
        "https://cdn.dribbble.com/users/2814348/screenshots/16484193/media/83adfbaa5eeeebbc7e9dc2cf2cdea120.png?compress=1&resize=320x240&vertical=top",
    },
    {
      source:
        "https://cdn.dribbble.com/users/159310/screenshots/16423092/media/771cbd920e7d77bf2453127f3b4061e0.png?compress=1&resize=320x240&vertical=top",
    },
    {
      source:
        "https://cdn.dribbble.com/users/2814348/screenshots/16818851/media/9d0621c37a3dfcc5182454255e149468.png?compress=1&resize=320x240&vertical=top",
    },
    {
      source:
        "https://cdn.dribbble.com/users/2814348/screenshots/16506852/media/eac1b681d1b094bbc0585d14a4ab8516.png?compress=1&resize=320x240&vertical=top",
    },
    {
      source:
        "https://cdn.dribbble.com/users/4573082/screenshots/16387857/media/6dc77a7f41b9ebc5b61942a626e33a12.png?compress=1&resize=320x240&vertical=top",
    },
    {
      source:
        "https://cdn.dribbble.com/users/3010014/screenshots/17878440/media/279f88cf30a1baba48a6c164746d8df0.jpg?compress=1&resize=320x240&vertical=top",
    },
    {
      source:
        "https://cdn.dribbble.com/users/632944/screenshots/5837420/agency_web_design.jpg?compress=1&resize=320x240&vertical=top",
    },
    {
      source:
        "https://cdn.dribbble.com/users/1998175/screenshots/16554661/media/d4bb98dc2a1f964e23952aebe9659846.jpg?compress=1&resize=320x240&vertical=top",
    },
    {
      source:
        "https://cdn.dribbble.com/userupload/2798319/file/original-2efc70ec3fe6e5cc71aaac3dc051112c.png?compress=1&resize=320x240&vertical=top",
    },
    {
      source:
        "https://cdn.dribbble.com/users/7233136/screenshots/18370643/media/ac6a41d5dc5c144feebbc3cfd31e52d2.png?compress=1&resize=320x240&vertical=top",
    },
    {
      source:
        "https://cdn.dribbble.com/users/6657629/screenshots/18370574/media/690580dac305d0aa75cb5919050b2b7a.png?compress=1&resize=320x240&vertical=top",
    },
    {
      source:
        "https://cdn.dribbble.com/users/9803181/screenshots/18371071/media/7f83600579bbc35ac40f33a8e5466097.png?compress=1&resize=320x240&vertical=top",
    },
  ],
  showNumOfRemainingPhotos: true,
};

export default function Collage() {
  return (
    // <ReactPhotoCollage {...setting} />
    <div
      style={{
        minHeight: "65vh",
        display: "flex",
        // justifyContent: "space-evenly",
        flexWrap: "wrap",
      }}
    >
      {setting.photos.map((img, index) => {
        if (index % 2 === 0) {
          return (
            <img
              src={img.source}
              alt={index}
              key={index}
              style={{
                maxHeight: "350px",
                maxWidth: "350px",
                margin: "0px 4px",
                objectFit: "contain",
              }}
            />
          );
        } else {
          return (
            <img
              src={img.source}
              alt={index}
              key={index}
              style={{
                maxHeight: "250px",
                maxWidth: "250px",
                margin: "0px 4px",
                objectFit: "contain",
              }}
            />
          );
        }
      })}
    </div>
  );
}
