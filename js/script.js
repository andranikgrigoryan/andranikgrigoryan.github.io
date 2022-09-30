const images = document.querySelectorAll('.img_index');
const img_infos = Array.from(document.querySelectorAll(".img_info"));
const img_texts = Array.from(document.querySelectorAll(".img_text"));

img_infos.forEach(item => {
  item.addEventListener("mouseover", (event) => {
    event.stopPropagation();
  });
});

img_texts.forEach((item) => {
  item.addEventListener("mouseover", (event) => {
    event.stopPropagation();
  });
});

images.forEach(item => {
  item.addEventListener("mouseover", (event) => {
    const divText = img_infos.find((each) => each.getAttribute("data-id") === item.getAttribute("id"));
    const divInfo = img_texts.find((each) => each.getAttribute("data-id") === item.getAttribute("id"));
    divText.style.display = "block";
    divInfo.style.display = "block";
    item.style.opacity = "0.5";
  })

  item.addEventListener("mouseout", (event) => {
    const divText = img_infos.find(
      (each) => each.getAttribute("data-id") === item.getAttribute("id")
    );

    const divInfo = img_texts.find(
      (each) => each.getAttribute("data-id") === item.getAttribute("id")
    );

    divText.style.display = "none";
    divInfo.style.display = "none";
    item.style.opacity = "1";

  });
})
