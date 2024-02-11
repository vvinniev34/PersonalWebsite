"use client";
import React, { useEffect, useState } from 'react';
import { scrollDown } from './animatedArrow';

export default function Glitch() {
	// 22 characters
	const texts = ["See what I'm building!", "Read about my projects", "Join me on my journey!"];
	const [dataValue, setDataValue] = useState(texts[0]);
	const [textIndex, setTextIndex] = useState(1);
	const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

	useEffect(() => {
		const textChangeEffect = setInterval(() => {

			let iteration = 0;
			let text = dataValue;
			const textChangeTimer = setInterval(() => {
				text = text.split("").map((letter, index) => {
					if (index < iteration) {
						if (index < texts[textIndex].length) {
							return texts[textIndex][index];
						} else {
							return text[index];
						}
					}

					if (index < texts[textIndex].length) {
						return letters[Math.floor(Math.random() * 26)];
					} else {
						return text[index];
					}
				})
					.join("");
				iteration += 1 / 2;
				if (iteration >= Math.max(text.length, texts[textIndex].length)) {
					clearInterval(textChangeTimer);
					// Cycle to next text
					setTextIndex((textIndex + 1) % texts.length);
				}
				setDataValue(text);
			}, 30);



		}, 3500);

		return () => {
			clearInterval(textChangeEffect);
		}
	}, [textIndex]);

	return (
		<h2 
			className="text-md font-mono duration-500 text-black hover:text-gray-500 text-xl preventSelect" 
			onClick={() => scrollDown()}
			style={{cursor:"pointer"}}
		>
			{dataValue}
		</h2>
	);
}