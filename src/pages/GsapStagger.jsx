import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapStagger = () => {
  useGSAP(() => {
    // Select all elements with the class 'stagger-box'
    const staggerBoxes = document.querySelectorAll(".stagger-box");

    // Animate the staggered boxes with a stagger effect
    gsap.to(staggerBoxes, {
      duration: 0.65,
      opacity: 0,
      y: 100,
      ease: "power1.inOut",
      // stagger: 0.2, // Stagger delay of 0.2 seconds
      stagger: {
        amount: 1, // Total stagger time for all elements
        grid: [2, 1], // Grid layout for staggering
        axis: "y", // Stagger along the y-axis
        ease: "circ.inOut", // Easing function for the stagger effect
        from: "center", // Start staggering from the mentioned element
      },
      repeat: -1, // Repeat indefinitely
      // yoyo: true, // Reverse the animation on each repeat
    });
  }, []);

  return (
    <main>
      <h1>GsapStagger</h1>

      <p className="mt-5 text-gray-500">
        GSAP stagger is a feature that allows you to apply animations with a
        staggered delay to a group of elements.
      </p>

      <p className="mt-5 text-gray-500">
        By using the stagger feature in GSAP, you can specify the amount of time
        to stagger the animations between each element, as well as customize the
        easing and duration of each individual animation. This enables you to
        create dynamic and visually appealing effects, such as staggered fades,
        rotations, movements, and more.
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://gsap.com/resources/getting-started/Staggers"
          target="_blank"
          rel="noreferrer noopener nofollow">
          Gsap Stagger
        </a>{" "}
        feature.
      </p>

      <div className="mt-20">
        <div className="flex gap-5">
          <div className="w-20 h-20 bg-indigo-200 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-300 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-400 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-500 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-600 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-700 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-800 rounded-lg stagger-box" />
        </div>
      </div>
    </main>
  );
};

export default GsapStagger;
