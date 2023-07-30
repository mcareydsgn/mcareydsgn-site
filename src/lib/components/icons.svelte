<script lang="ts">
	export let name: string;
	export let icon_library_name: string = "brands";
</script>

<div class="icon-container">
	{#if icon_library_name.toLowerCase() === "brands"}
		<svg
			class="brands"
			width="100%"
			height="100%"
			viewBox="0 0 48 48"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			xml:space="preserve"
			style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
		>
			{#if name.toLowerCase() === "vite"}
				<g>
					<clipPath id="_clip1">
						<path
							d="M46.011,7.289L25.194,47.118C24.764,47.94 23.66,47.945 23.224,47.126L1.994,7.293C1.518,6.401 2.231,5.321 3.175,5.502L24.015,9.487C24.148,9.513 24.284,9.513 24.417,9.487L44.821,5.508C45.762,5.324 46.478,6.396 46.011,7.289Z"
							clip-rule="nonzero"
						/>
					</clipPath>
					<g clip-path="url(#_clip1)">
						<use
							xlink:href="#_Image2"
							x="1.871"
							y="5.579"
							width="44.316px"
							height="42.255px"
							transform="matrix(0.98479,0,0,0.982679,0,0)"
						/>
					</g>
					<clipPath id="_clip3">
						<path
							d="M33.942,0.274L18.537,3.504C18.283,3.557 18.096,3.787 18.081,4.062L17.133,21.187C17.111,21.59 17.457,21.903 17.825,21.812L22.114,20.753C22.515,20.654 22.878,21.032 22.795,21.464L21.521,28.14C21.435,28.59 21.83,28.974 22.24,28.841L24.889,27.98C25.3,27.846 25.694,28.231 25.607,28.681L23.582,39.168C23.456,39.824 24.271,40.182 24.611,39.619L24.838,39.244L37.391,12.44C37.602,11.991 37.239,11.479 36.778,11.574L32.364,12.486C31.949,12.572 31.596,12.158 31.713,11.724L34.594,1.036C34.712,0.601 34.357,0.187 33.942,0.274Z"
							clip-rule="nonzero"
						/>
					</clipPath>
					<g clip-path="url(#_clip3)">
						<use
							xlink:href="#_Image4"
							x="17.705"
							y="0.265"
							width="20.321px"
							height="39.636px"
							transform="matrix(0.967651,0,0,0.990893,0,0)"
						/>
					</g>
				</g>
				<defs>
					<image
						id="_Image2"
						width="45px"
						height="43px"
						xlink:href="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAArAC0DAREAAhEBAxEB/8QAGgABAAIDAQAAAAAAAAAAAAAABAAGAQMFAv/EABsQAQEAAwEBAQAAAAAAAAAAAAMAAQIhYTFR/8QAGwEBAQACAwEAAAAAAAAAAAAABQMABwECBgT/xAAaEQADAQEBAQAAAAAAAAAAAAAAAgMBBCER/9oADAMBAAIRAxEAPwC8InttNVNSR5wyJVxRaPOFRKyqLR5wyJ7VxRaPOFVPauKLR5w+ydqYopPn8LEiRuKavjzhkSrii0ecKqVcUVjzhlSqqi8ecKiVcUVjzh907VxRSfP4WJEjcU1hHnDKlTFFY84VEq4otHnDIlbFFo84VUqqotHnD7p2riiiQ8LEqRmKavjzhlSqqi0ecKiVcUWjzhkSqqi0ecNvvnNXME5yxTzdix20SPVTwEecMie1VUWjzhVSsqi0ec0bbZzUzBBExTFydyWGHSXOf2+RTysFwKuc97WUWiuGjb7UwSXPmGLk7EsMJYYf/9k="
					/>
					<image
						id="_Image4"
						width="21px"
						height="40px"
						xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAoCAYAAAAR87HlAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAA5klEQVRIidVWSxLDIAilHW7es7aLTk9Qf12YTtRRQSCZlk3EyPM9opBLet4SUJY8APj8ZIxxj4zMIAeQwmA+jxHCq3jp2GzyeBOZarEI7k4EhiINTaYGPoJ/THeV+AjxTS+mgJo5hBhVrHp+DSoB68pPdrn8mk7+lKkhyzWmZvIFLOXyVUzF55RiKlCRmRrlsgZdYMFRsS6fsfnOVPuRKqZtQdEUk23u4GuqPPClr5M/8Hn19DfbifZ2ndNOOrtOgQZrTj6nVLBYvtD/p3ZC/faI2klPPjN4ZHTfFxhaAZV2NUc8CvQDjI7pDkNST9wAAAAASUVORK5CYII="
					/>
				</defs>
			{:else if name.toLowerCase() === "vue"}
				<g>
					<path
						d="M29.55,3.375L24,12.9L18.45,3.375L0,3.375L24,44.625L48,3.375L29.55,3.375Z"
						style="fill:rgb(66,184,131);fill-rule:nonzero;"
					/>
					<path
						d="M29.55,3.375L24,12.9L18.45,3.375L9.6,3.375L24,28.125L38.4,3.375L29.55,3.375Z"
						style="fill:rgb(53,73,94);fill-rule:nonzero;"
					/>
				</g>
			{:else if name.toLowerCase() === "html"}
				<g>
					<path
						d="M6.703,43.125L2.859,0L45.141,0L41.297,43.125L23.953,48"
						style="fill:rgb(227,79,38);fill-rule:nonzero;"
					/>
					<path
						d="M24.047,44.25L38.016,40.406L41.297,3.469L24.047,3.469"
						style="fill:rgb(239,101,42);fill-rule:nonzero;"
					/>
					<path
						d="M24.047,19.5L17.016,19.5L16.547,14.063L24.047,14.063L24.047,8.813L10.734,8.813L10.828,10.219L12.141,24.844L24.047,24.844L24.047,19.5ZM24.047,33.281L23.953,33.281L18.047,31.688L17.672,27.469L12.422,27.469L13.078,35.813L23.953,38.813L24.047,38.813L24.047,33.281Z"
						style="fill:rgb(235,235,235);fill-rule:nonzero;"
					/>
					<path
						d="M23.953,19.5L23.953,24.844L30.516,24.844L29.859,31.688L23.953,33.281L23.953,38.813L34.828,35.813L34.922,34.875L36.141,20.906L36.328,19.5L23.953,19.5ZM23.953,8.813L23.953,14.063L36.797,14.063L36.891,12.938L37.172,10.219L37.266,8.813L23.953,8.813Z"
						style="fill:white;fill-rule:nonzero;"
					/>
				</g>
			{:else if name.toLowerCase() === "javascript"}
				<g>
					<rect
						x="0"
						y="0"
						width="48"
						height="48"
						style="fill:rgb(247,223,30);"
					/>
					<path
						d="M32.244,37.5C33.211,39.079 34.469,40.239 36.693,40.239C38.562,40.239 39.756,39.305 39.756,38.014C39.756,36.468 38.53,35.92 36.472,35.02L35.345,34.536C32.09,33.15 29.928,31.413 29.928,27.74C29.928,24.357 32.505,21.782 36.533,21.782C39.401,21.782 41.463,22.78 42.949,25.394L39.436,27.649C38.663,26.262 37.829,25.716 36.533,25.716C35.212,25.716 34.375,26.554 34.375,27.649C34.375,29.002 35.213,29.55 37.148,30.388L38.276,30.871C42.108,32.514 44.272,34.19 44.272,37.957C44.272,42.018 41.082,44.242 36.798,44.242C32.609,44.242 29.902,42.246 28.578,39.63L32.244,37.5ZM16.31,37.891C17.019,39.148 17.663,40.211 19.213,40.211C20.695,40.211 21.63,39.631 21.63,37.377L21.63,22.04L26.14,22.04L26.14,37.438C26.14,42.108 23.402,44.234 19.405,44.234C15.794,44.234 13.702,42.365 12.638,40.114L16.31,37.891Z"
						style="fill-rule:nonzero;"
					/>
				</g>
			{:else if name.toLowerCase() === "css"}
				<g>
					<path
						id="polygon2989"
						d="M45.162,-0L41.306,43.195L23.974,48L6.69,43.202L2.838,-0L45.162,-0Z"
						style="fill:rgb(38,77,228);fill-rule:nonzero;"
					/>
					<path
						id="polygon2991"
						d="M38.005,40.444L41.3,3.532L24,3.532L24,44.327L38.005,40.444Z"
						style="fill:rgb(41,101,241);fill-rule:nonzero;"
					/>
					<path
						id="polygon2993"
						d="M11.668,19.555L12.143,24.854L24,24.854L24,19.555L11.668,19.555Z"
						style="fill:rgb(235,235,235);fill-rule:nonzero;"
					/>
					<path
						id="polygon2995"
						d="M24,8.831L10.714,8.831L11.195,14.13L24,14.13L24,8.831Z"
						style="fill:rgb(235,235,235);fill-rule:nonzero;"
					/>
					<path
						id="polygon2997"
						d="M24,38.829L24,33.316L23.977,33.322L18.076,31.729L17.699,27.503L12.38,27.503L13.122,35.823L23.976,38.836L24,38.829Z"
						style="fill:rgb(235,235,235);fill-rule:nonzero;"
					/>
					<path
						id="polygon3005"
						d="M30.506,24.854L29.891,31.726L23.982,33.321L23.982,38.833L34.844,35.823L34.924,34.927L36.169,20.978L36.298,19.555L37.255,8.831L23.982,8.831L23.982,14.13L31.448,14.13L30.966,19.555L23.982,19.555L23.982,24.854L30.506,24.854Z"
						style="fill:white;fill-rule:nonzero;"
					/>
				</g>
			{:else if name.toLowerCase() === "illustrator"}
				<g>
					<g id="Surfaces">
						<g id="Drawing_Surface">
							<g id="Outline_no_shadow">
								<path
									d="M8.718,0L40.513,0C45.333,0 49.231,3.897 49.231,8.718L49.231,39.282C49.231,44.103 45.333,48 40.513,48L8.718,48C3.897,48 0,44.103 0,39.282L0,8.718C0,3.897 3.897,0 8.718,0Z"
									style="fill:rgb(51,0,0);fill-rule:nonzero;"
								/>
							</g>
						</g>
					</g>
					<g id="Outlined_Mnemonics_Logos">
						<g id="Ai">
							<path
								d="M23.856,28.8L16.226,28.8L14.667,33.621C14.626,33.805 14.462,33.928 14.277,33.908L10.421,33.908C10.195,33.908 10.133,33.785 10.195,33.538L16.8,14.523C16.862,14.318 16.923,14.092 17.005,13.846C17.087,13.415 17.128,12.964 17.128,12.513C17.108,12.41 17.19,12.308 17.292,12.287L22.605,12.287C22.769,12.287 22.851,12.349 22.872,12.451L30.359,33.579C30.421,33.805 30.359,33.908 30.154,33.908L25.867,33.908C25.723,33.928 25.579,33.826 25.538,33.682L23.856,28.8ZM17.415,24.636L22.626,24.636C22.503,24.205 22.338,23.692 22.154,23.159C21.969,22.605 21.785,22.01 21.6,21.395C21.395,20.759 21.21,20.144 21.005,19.508C20.8,18.872 20.615,18.277 20.451,17.682C20.287,17.108 20.144,16.574 20,16.082L19.959,16.082C19.774,16.964 19.549,17.846 19.262,18.728C18.954,19.713 18.646,20.738 18.318,21.764C18.031,22.81 17.723,23.774 17.415,24.636Z"
								style="fill:rgb(255,154,0);fill-rule:nonzero;"
							/>
							<path
								d="M34.831,15.795C34.154,15.815 33.497,15.549 33.005,15.077C32.533,14.564 32.287,13.887 32.308,13.19C32.287,12.492 32.554,11.836 33.046,11.364C33.538,10.892 34.195,10.646 34.872,10.646C35.672,10.646 36.287,10.892 36.738,11.364C37.19,11.856 37.436,12.513 37.415,13.19C37.436,13.887 37.19,14.564 36.697,15.077C36.226,15.569 35.528,15.836 34.831,15.795ZM32.533,33.6L32.533,17.805C32.533,17.6 32.615,17.518 32.8,17.518L36.862,17.518C37.046,17.518 37.128,17.621 37.128,17.805L37.128,33.6C37.128,33.826 37.046,33.928 36.862,33.928L32.841,33.928C32.636,33.928 32.533,33.805 32.533,33.6Z"
								style="fill:rgb(255,154,0);fill-rule:nonzero;"
							/>
						</g>
					</g>
				</g>
			{:else if name.toLowerCase() === "figma"}
				<g>
					<path
						d="M24,24C24,19.611 27.611,16 32,16C36.389,16 40,19.611 40,24C40,28.389 36.389,32 32,32C27.611,32 24,28.389 24,24Z"
						style="fill:rgb(26,188,254);fill-rule:nonzero;"
					/>
					<path
						d="M8,40C8,35.611 11.611,32 16,32L24,32L24,40C24,44.389 20.389,48 16,48C11.611,48 8,44.389 8,40Z"
						style="fill:rgb(10,207,131);fill-rule:nonzero;"
					/>
					<path
						d="M24,0L24,16L32,16C36.389,16 40,12.389 40,8C40,3.611 36.389,0 32,0L24,0Z"
						style="fill:rgb(255,114,98);fill-rule:nonzero;"
					/>
					<path
						d="M8,8C8,12.389 11.611,16 16,16L24,16L24,0L16,0C11.611,0 8,3.611 8,8Z"
						style="fill:rgb(242,78,30);fill-rule:nonzero;"
					/>
					<path
						d="M8,24C8,28.389 11.611,32 16,32L24,32L24,16L16,16C11.611,16 8,19.611 8,24Z"
						style="fill:rgb(162,89,255);fill-rule:nonzero;"
					/>
				</g>
			{:else if name.toLowerCase() === "vs code"}
				<g>
					<path
						d="M46.3,5.32L36.404,0.554C35.258,0.003 33.889,0.236 32.99,1.135L0.592,30.674C-0.279,31.468 -0.278,32.84 0.594,33.634L3.241,36.039C3.954,36.688 5.028,36.736 5.796,36.153L44.811,6.556C46.12,5.563 48,6.496 48,8.139L48,8.024C48,6.871 47.339,5.82 46.3,5.32Z"
						style="fill:rgb(0,101,169);fill-rule:nonzero;"
					/>
					<g>
						<path
							d="M46.3,42.98L36.404,47.745C35.258,48.297 33.889,48.064 32.99,47.165L0.592,17.626C-0.279,16.831 -0.278,15.459 0.594,14.666L3.241,12.26C3.954,11.611 5.028,11.564 5.796,12.146L44.811,41.744C46.12,42.737 48,41.803 48,40.16L48,40.275C48,41.428 47.339,42.48 46.3,42.98Z"
							style="fill:rgb(0,122,204);fill-rule:nonzero;"
						/>
					</g>
					<g>
						<path
							d="M36.404,47.746C35.258,48.297 33.889,48.064 32.99,47.165C34.098,48.273 35.992,47.488 35.992,45.921L35.992,2.378C35.992,0.811 34.098,0.027 32.99,1.135C33.889,0.235 35.258,0.003 36.404,0.554L46.299,5.312C47.339,5.812 48,6.864 48,8.017L48,40.282C48,41.436 47.339,42.488 46.299,42.988L36.404,47.746Z"
							style="fill:rgb(31,156,240);fill-rule:nonzero;"
						/>
					</g>
					<g opacity="0.25">
						<path
							d="M33.999,47.838C34.756,48.132 35.618,48.113 36.382,47.746L46.271,42.988C47.31,42.488 47.971,41.436 47.971,40.282L47.971,8.018C47.971,6.864 47.31,5.812 46.271,5.312L36.382,0.554C35.38,0.071 34.207,0.19 33.328,0.829C33.202,0.92 33.082,1.022 32.97,1.135L14.039,18.406L5.793,12.146C5.025,11.564 3.952,11.612 3.239,12.26L0.594,14.666C-0.278,15.459 -0.279,16.831 0.592,17.626L7.743,24.15L0.592,30.674C-0.279,31.469 -0.278,32.84 0.594,33.634L3.239,36.039C3.952,36.688 5.025,36.736 5.793,36.153L14.039,29.894L32.97,47.165C33.27,47.465 33.621,47.69 33.999,47.838ZM35.97,13.246L21.606,24.15L35.97,35.053L35.97,13.246Z"
							style="fill:url(#_Linear1);"
						/>
					</g>
				</g>
				<defs>
					<linearGradient
						id="_Linear1"
						x1="0"
						y1="0"
						x2="1"
						y2="0"
						gradientUnits="userSpaceOnUse"
						gradientTransform="matrix(2.92592e-15,47.784,-47.784,2.92592e-15,23.955,0.25778)"
						><stop
							offset="0"
							style="stop-color:white;stop-opacity:1"
						/><stop
							offset="1"
							style="stop-color:white;stop-opacity:0"
						/></linearGradient
					>
				</defs>
			{:else if name.toLowerCase() === "chart js"}
				<g>
					<path
						d="M43.581,24.167C36.871,24.298 38.269,28.546 33.539,29.621C28.735,30.712 27.977,17.888 23.174,17.888C18.37,17.888 17.306,30.345 11.291,38.898L11.12,39.14L24.015,46.584L43.581,35.288L43.581,24.167Z"
						style="fill:rgb(54,162,235);fill-rule:nonzero;"
					/>
					<path
						d="M43.581,23.78C41.335,20.897 39.811,17.583 36.533,17.583C30.732,17.583 32.258,27.046 25.847,27.046C19.435,27.046 18.761,16.867 11.498,26.436C9.183,29.485 7.32,32.884 5.857,36.101L24.015,46.584L43.581,35.289L43.581,23.78Z"
						style="fill:rgb(255,206,86);fill-rule:nonzero;"
					/>
					<path
						d="M4.449,27.7C6.65,21.604 7.6,16.667 11.803,16.667C18.214,16.667 19.74,34.678 25.237,32.846C30.732,31.014 30.121,21.245 38.67,21.245C40.298,21.245 41.959,22.242 43.582,23.855L43.582,35.288L24.016,46.584L4.449,35.288L4.449,27.7L4.449,27.7Z"
						style="fill:rgb(254,97,132);fill-opacity:0.8;fill-rule:nonzero;"
					/>
					<path
						d="M24,48L3.212,36L3.212,12L24,0L44.788,12L44.788,36L24,48ZM5.655,34.59L24,45.181L42.345,34.59L42.345,13.41L24,2.82L5.655,13.41L5.655,34.59Z"
						style="fill:rgb(231,233,237);fill-rule:nonzero;"
					/>
				</g>
			{/if}
		</svg>
		<span>{name}</span>
	{:else if icon_library_name.toLowerCase() === "heroicons"}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 20"
			fill="currentColor"
			class="hero-icons"
		>
			{#if name.toLowerCase() === "play"}
				<path
					fill-rule="evenodd"
					d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm6.39-2.908a.75.75 0 01.766.027l3.5 2.25a.75.75 0 010 1.262l-3.5 2.25A.75.75 0 018 12.25v-4.5a.75.75 0 01.39-.658z"
					clip-rule="evenodd"
				/>
			{:else if name.toLowerCase() === "paused"}
				<path
					fill-rule="evenodd"
					d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm5-2.25A.75.75 0 017.75 7h.5a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75h-.5a.75.75 0 01-.75-.75v-4.5zm4 0a.75.75 0 01.75-.75h.5a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75h-.5a.75.75 0 01-.75-.75v-4.5z"
					clip-rule="evenodd"
				/>
			{:else if name.toLowerCase() === "volume"}
				<path
					d="M10 3.75a.75.75 0 00-1.264-.546L4.703 7H3.167a.75.75 0 00-.7.48A6.985 6.985 0 002 10c0 .887.165 1.737.468 2.52.111.29.39.48.7.48h1.535l4.033 3.796A.75.75 0 0010 16.25V3.75zM15.95 5.05a.75.75 0 00-1.06 1.061 5.5 5.5 0 010 7.778.75.75 0 001.06 1.06 7 7 0 000-9.899z"
				/>
				<path
					d="M13.829 7.172a.75.75 0 00-1.061 1.06 2.5 2.5 0 010 3.536.75.75 0 001.06 1.06 4 4 0 000-5.656z"
				/>
			{:else if name.toLowerCase() === "mute"}
				<path
					d="M9.547 3.062A.75.75 0 0110 3.75v12.5a.75.75 0 01-1.264.546L4.703 13H3.167a.75.75 0 01-.7-.48A6.985 6.985 0 012 10c0-.887.165-1.737.468-2.52a.75.75 0 01.7-.48h1.535l4.033-3.796a.75.75 0 01.811-.142zM13.28 7.22a.75.75 0 10-1.06 1.06L13.94 10l-1.72 1.72a.75.75 0 001.06 1.06L15 11.06l1.72 1.72a.75.75 0 101.06-1.06L16.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L15 8.94l-1.72-1.72z"
				/>
			{:else if name.toLowerCase() === "expand"}
				<path
					fill-rule="evenodd"
					d="M15 3.75a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0V5.56l-3.97 3.97a.75.75 0 11-1.06-1.06l3.97-3.97h-2.69a.75.75 0 01-.75-.75zm-12 0A.75.75 0 013.75 3h4.5a.75.75 0 010 1.5H5.56l3.97 3.97a.75.75 0 01-1.06 1.06L4.5 5.56v2.69a.75.75 0 01-1.5 0v-4.5zm11.47 11.78a.75.75 0 111.06-1.06l3.97 3.97v-2.69a.75.75 0 011.5 0v4.5a.75.75 0 01-.75.75h-4.5a.75.75 0 010-1.5h2.69l-3.97-3.97zm-4.94-1.06a.75.75 0 010 1.06L5.56 19.5h2.69a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v2.69l3.97-3.97a.75.75 0 011.06 0z"
					clip-rule="evenodd"
				/>
			{/if}
		</svg>
	{/if}
</div>

<style>
	.icon-container {
		display: inline-flex;
		flex-direction: column;
		text-align: center;
		align-items: center;
	}

	.icon-container svg {
		height: auto;
	}
	.icon-container svg.brands {
		width: 40px;
	}
	.icon-container svg.hero-icons {
		width: 30px;
	}
</style>
