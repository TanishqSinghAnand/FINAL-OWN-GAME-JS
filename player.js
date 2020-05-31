class Form{
	constructor(){
		this.input = createInput('Username');
		this.submit = createButton('Submit');
		this.ready = createButton('Ready');
		this.ready.hide();
		this.name = null ;
		this.SUBMIT = createButton('Submit');
		this.SUBMIT.hide();
		this.A1 = 0 ;
		this.A2 = 0 ;
		this.A3 = 0 ;
		this.A4 = 0 ;


		//QUESTION 1
		this.Q1O1 = createButton('Week in air and surfaces');
		this.Q1O1.hide();
		this.Q1O2 = createButton('Up to 2 weeks');
		this.Q1O2.hide();
		this.Q1O3 = createButton('Several hours to days');
		this.Q1O3.hide();

		//QUESTION 2
		this.Q2O1 = createButton('Frequently wash hands');
		this.Q2O1.hide();
		this.Q2O2 = createButton('Wear a face mask');
		this.Q2O2.hide();
		this.Q2O3 = createButton('Having medicine HCQS');
		this.Q2O3.hide();

		//QUESTION 3
		this.Q3O1 = createButton('20%');
		this.Q3O1.hide();
		this.Q3O2 = createButton('40%');
		this.Q3O2.hide();
		this.Q3O3 = createButton('80%');
		this.Q3O3.hide();


		//QUESTION 4
		this.Q4O1 = createButton('1 foot');
		this.Q4O1.hide();
		this.Q4O2 = createButton('3 feet');
		this.Q4O2.hide();
		this.Q4O3 = createButton('7.5 feet');
		this.Q4O3.hide();


	}

	display(){
		if(gamestate === 0){
			this.input.position(250,250);
			this.submit.position(370,280);
		}

		if(gamestate === 2){
			//QUESTION 1
			this.Q1O1.show();
			this.Q1O2.show();
			this.Q1O3.show();

			//QUESTION 2
			this.Q2O1.show();
			this.Q2O2.show();
			this.Q2O3.show();

			//QUESTION 3
			this.Q3O1.show();
			this.Q3O2.show();
			this.Q3O3.show();

			//QUESTION 4
			this.Q4O1.show();
			this.Q4O2.show();
			this.Q4O3.show();


			this.SUBMIT.show();
			this.SUBMIT.position(600,550);
		}

		var playerIndex = "players/player" + this.index;
		if(index === 0 ){
			index ++ ;
		}
		if(this.index % 1 !==  0){
			index ++ ;
		}
		database.ref('player' + this.name).set({
			name:this.name,
			score: score
		});
	}


	hidef(){
		console.log(index);


		if(gamestate === 0){
			this.submit.mousePressed(()=>{
				    this.name= this.input.value();
					this.input.hide() ;
					this.submit.hide() ;
					index ++
					gamestate = 1 ;
			});
		}
		if(gamestate === 1){
			this.ready.show();
			this.ready.position(300,350);
			textSize(25);
			fill(rgb(100,150,255));
			text("Hello , "+ this.name + " , are you ready to take the quiz 😀  about Covid 19 ?? ",71,50);
			text("U can answer only 1 time So think and answer 🤔",71,75);
			this.ready.mousePressed(()=>{
				gamestate = 2 ;
				this.ready.hide();
			});
		}

		if(gamestate === 2){

			//Question1

			fill("yellow");
			text("Q1 How long does the novel coronavirus survive outside the body",77,50);
			this.Q1O1.position(77,70);
			this.Q1O2.position(77,95);
			this.Q1O3.position(77,120);

			//QUESTION 2
			text("Q2 What’s more important for preventing infection?",77,170);
			this.Q2O1.position(77,185);
			this.Q2O2.position(77,210);
			this.Q2O3.position(77,235	);

			//QUESTION 3
			text("Q3 What percentage of people confirmed to have Covid-19 develop mild or moderate symptoms?",77,275);
			this.Q3O1.position(77,285);
			this.Q3O2.position(77,310);
			this.Q3O3.position(77,335);

			//QUESTION 4
			fill("yellow");
			text("Q4 What is a safe distance to stay apart from someone who is sick",77,380);
			this.Q4O1.position(77,395);
			this.Q4O2.position(77,420);
			this.Q4O3.position(77,445);


			//END AND SCORING SYSTEM

			//ANSWER1
			this.Q1O1.mousePressed(()=>{
					if(this.A1 === 0){
						this.A1 ++ ;
					}
			});
			this.Q1O2.mousePressed(()=>{
					if(this.A1 === 0){
						this.A1 ++ ;
					}
			});
			this.Q1O3.mousePressed(()=>{
					if(this.A1 === 0){
						this.A1 ++ ;
						score ++ ;
					}
			});
			//ANSWER2
			this.Q2O3.mousePressed(()=>{
					if(this.A2 === 0){
						this.A2 ++ ;
					}
			});
			this.Q2O2.mousePressed(()=>{
					if(this.A2 === 0){
						this.A2 ++ ;
					}
			});
			this.Q2O1.mousePressed(()=>{
					if(this.A2 === 0){
						this.A2 ++ ;
						score ++ ;
					}
			});
			//ANWER3
			this.Q3O1.mousePressed(()=>{
					if(this.A3 === 0){
						this.A3 ++ ;
					}
			});
			this.Q3O2.mousePressed(()=>{
					if(this.A3 === 0){
						this.A3 ++ ;
					}
			});
			this.Q3O3.mousePressed(()=>{
					if(this.A3 === 0){
						this.A3 ++ ;
						score ++ ;
					}
			});
			//ANSWER4
			this.Q4O1.mousePressed(()=>{
					if(this.A4 === 0){
						this.A4 ++ ;
					}
			});
			this.Q4O2.mousePressed(()=>{
					if(this.A4 === 0){
						this.A4 ++ ;
						score ++ ;
					}
			});
			this.Q4O3.mousePressed(()=>{
					if(this.A4 === 0){
						this.A4 ++ ;
					}
			});

		if(this.A1 === 1 && this.A2 === 1 && this.A3 === 1 && this.A4 === 1){

				this.SUBMIT.mousePressed(()=>{
					gamestate = 3
				});
		}

		}

		if( gamestate === 3){

			//HIDING ALL Buttons
			this.SUBMIT.hide();

			//QUESTION 1
			this.Q1O1.hide();
			this.Q1O2.hide();
			this.Q1O3.hide();

			//QUESTION 2
			this.Q2O1.hide();
			this.Q2O2.hide();
			this.Q2O3.hide();

			//QUESTION 3
			this.Q3O1.hide();
			this.Q3O2.hide();
			this.Q3O3.hide();

			//QUESTION 4
			this.Q4O1.hide();
			this.Q4O2.hide();
			this.Q4O3.hide();

			//Question1
			textSize(20);
			fill("yellow");
			text("Q1 How long does the novel coronavirus survive outside the body",77,55);
			textSize(15);
			fill("red");
			text("i) Week in air and surfaces",77,75);
			text("ii) Up to 2 weeks",77,95);
			textSize(15);
			fill("green");
			text("iii) 'Several hours to days",77,116);


			//QUESTION 2
			textSize(20);
			fill("yellow");
			text("Q2 What’s more important for preventing infection?",77,170);
			textSize(15);
			fill("green");
			text("i) Frequently wash hands",77,190);
			textSize(15);
			fill("red");
			text("ii) Wear a face mask ",77,210);
			text("iii) Having the medicine HCQS",77,230);


			//QUESTION 3
			textSize(20);
			fill("yellow");
			text("Q3 What percentage of people confirmed to have Covid-19 develop mild or moderate symptoms?",77,275);
			textSize(15);
			fill("red");
			text("i) 20%",77,293);
			text("ii) 40%",77,310);
			textSize(15);
			fill("green");
			text("iii) 80%",77,330);

			//QUESTION 4
			textSize(20);
			fill("yellow");
			text("Q4 What is a safe distance to stay apart from someone who is sick",77,373);
			textSize(15);
			fill("red");
			text("i) 1 foot",77,390);
			text("iii) 7.5 feet",77,430)
			textSize(15);
			fill("green");
			text("ii) 3 feet",77,410);


			//REASONS
			textSize(15);
			fill(rgb(255,100,150));
			text("Reason - The COVID-19 virus is stable for several hours in aerosol and upto 2 to 3 days on plastic and stainless steel",77,140);
			text("Reason - Soap breaks the structure of virus and makes it inactive",77,250);
			text("Reason - A joint investigation by the WHO and China found that 80% of laboratory-confirmed patients have mild to moderate disease, which  include a mild  pneumonia",77,347);
			text("Reason - COVID-19 virus spread via respiratory droplets expelled by an infected person's cough or sneeze. So WHO advices staying 1 meter(3 feet) away from a sick person",77,449);


		}
		}




}
