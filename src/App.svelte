<script>
	export let name, dimension;

	//Reactive Variables

	$: UppercaseName = name.toUpperCase();
	$: console.log(name);

	//Logical Reactive Variable
	$: name === "Blino" ? (dimension = 23) : incrementDimension;

	//Arrow function that will change the prop value
	const changeName = () => {
		name = "Drian";
	};

	const decrementDimension = () => {
		dimension -= 1;
	};

	//Arrow function that will change the prop value
	const incrementDimension = () => {
		dimension += 1;
	};

	const nameInput = (event) => {
		let enteredValue = event.target.value;
		name = enteredValue;
	};

	const dimensionInput = (event) => {
		let enteredValue = event.target.value;
		dimension = enteredValue;
		console.log(dimension);
	};
</script>

<div class="main-container">
	<div class="main-container__title">
		<h1>Hello {UppercaseName}, welcome to {dimension}nd universe!</h1>
	</div>
	<div class="main-container__button">
		<!-- on:click and inside curlybraces we write the function name that we want to be executed when we click on the button -->
		<!-- <button on:click={changeName}> Change Name</button> -->
		<button on:click={incrementDimension}>Increment Dimension</button>
		<button on:click={decrementDimension}>Decrement Dimension</button>
		<input
			type="text"
			value={name}
			class="main__input"
			on:input={nameInput}
		/>
		<input
			type="text"
			class="main__input"
			value={dimension}
			on:input={dimensionInput}
		/>
	</div>
</div>

<style>
	.main-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-content: center;
		align-items: center;

		width: 100%;
		height: 100%;
	}
	.main-container__title {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		align-content: center;

		flex-wrap: wrap;

		width: 100%;
	}
	.main-container__button {
		display: flex;
		flex-direction: row;
		align-items: center;
		align-content: center;
		justify-content: space-around;

		flex-wrap: wrap;

		width: 100%;
	}
	h1 {
		font-family: "Poppins", serif;
		font-size: 31px;

		color: green;
	}

	button {
		transition: 0.3s all ease-out;
		border: 1px solid darkgreen;
		background: rgb(255, 255, 255);
		padding: 10px 20px 10px 20px;
		color: darkgreen;

		font-family: "Poppins", serif;
	}
	button:hover {
		transition: 0.3s all ease-in;
		border: 1px solid rgb(255, 255, 255);
		background: darkgreen;
		padding: 10px 20px 10px 20px;
		color: #fff;

		font-family: "Poppins", serif;
	}

	.main__input {
		border: 1px solid black;
		padding: 10px;
	}
	.main__input:focus {
		outline: none;
	}
</style>
