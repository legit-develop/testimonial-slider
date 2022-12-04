const testimonials = [
  {
    name: "Sheppard U",
    photoUrl:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    text: "Man, this thing is getting better and better as I learn more about it",
  },
  {
    name: "Jack F",
    photoUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    text: `Web development is the real deal! Web development is worth much more than I paid. I will refer everyone I know. I use web development often."
the`,
  },
  {
    name: "Tess B",
    photoUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
    text: `Web development impressed me on multiple levels. Without web development, we would have gone bankrupt by now. Man, this thing is getting better and better as I learn more about it.`,
  },
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");
console.log(imgEl);
console.log(textEl);
console.log(usernameEl);

let idx = 0;

updateTestimonial();

function updateTestimonial() {
  const { name, photoUrl, text } = testimonials[idx];
  imgEl.src = photoUrl;
  textEl.innerText = text;
  usernameEl.innerText = name;
  idx++;
  if (idx === testimonials.length) {
    idx = 0;
  }
  setTimeout(() => {
    updateTestimonial();
  }, 2000);
}
