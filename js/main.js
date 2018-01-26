Vue.component('updater-card', {
	props: ['info'],
	template: `
		<div class="card">
			<div class="info">
				<div class="logo padding-bottom-1"><img :src="''+info.logoUrl+''" alt=""></div>
				<div class="company text-center text-bold text-gray padding-bottom-2">{{info.name}}</div>
				<div class="promo text-center text-blue padding-bottom-1" v-if="info.hasOwnProperty('promoMessage') && info.promoMessage != ''">{{info.promoMessage}}</div>
				<div class="promo-code text-center padding-bottom-2" v-if="info.hasOwnProperty('promoCode') && info.promoCode != ''">Use promo code: <span class="text-bold">{{info.promoCode}}</span></div>
				<div class="padding-top-4" v-if="!info.hasOwnProperty('promoCode') || info.promoCode == ''"></div>
				<ul class="features padding-bottom-5" v-if="info.hasOwnProperty('features') && info.features.length > 0">
					<li v-for="feature in info.features"><i class="fa fa-check" aria-hidden="true"></i> {{feature}}</li>
				</ul>
				<div class="bottom">
					<a target="_blank" :href="''+info.profileHref+''" class="profile text-bold text-center padding-bottom-2" v-if="info.hasOwnProperty('profileHref') && info.profileHref != ''">View Profile</a>
					<div class="button-center">
						<a target="_blank" :href="''+info.ctaUrl+''" class="button text-bold text-center">{{info.ctaText}}</a>
					</div>
				</div>				
			</div>
		</div>
		`
})


new Vue({
	el: '#root',
	data : {
		cards :[
			{
				ctaUrl :   'https://www.penske.com',
				ctaText :   'Rent Truck',
				logoUrl :   'http://res.cloudinary.com/updater-staging/image/upload/c_scale,h_70/Penske.png', 
				promoMessage :   '10% off any rental',
				promoCode :   'UPDATER',
				features :  [
				 'Free unlimited mileage on one-way rentals',  
				 '24/7 roadside assistance',
				 'Flexible reservation and cancellation policies',
				 'Expert support',
				 ],
				name :   'Penske',
				profileHref :   'https://www.pensketruckrental.com/quote/start.html'
			},
			{
				ctaUrl :   'https://www.simplemovinglabor.com/booking-form/#service-info',
				ctaText :   'Hire Labor',
				logoUrl :   'http://res.cloudinary.com/updater-staging/image/upload/c_scale,h_70/sml.png', 
				promoMessage :   '15% off any rental',
				promoCode :   '',
				features :  [
				 'Free unlimited mileage on one-way rentals',  
				 '24/7 roadside assistance',
				 'Flexible reservation and cancellation policies'
				 ], 
				name :   'sml',
				profileHref :   'https://www.simplemovinglabor.com/'
			}
		]
	},
	mounted: function() {
		Vue.nextTick(() => {
			this.changeHeight();
	    });
	  	window.addEventListener('resize', this.handleResize)
	},
	ready: function () {
	  
	},
	methods: {
		handleResize(event) {
			this.clearHeight();
			this.changeHeight();
		},
		changeHeight: function(){
			const squares = document.querySelectorAll('.card');
			let highest;
			let heights = [];
			for (let i = 0; i < squares.length; ++i) {
				heights.push(squares[i].clientHeight);
			}
	      	highest = Math.max(...heights);
	      	for (let x = 0; x < squares.length; ++x) {
				squares[x].style.height = highest;
			}
		},
		clearHeight: function(){
			const squares = document.querySelectorAll('.card');
			for (let x = 0; x < squares.length; ++x) {
				squares[x].style.height = 'auto';
			}
			//;
		}
	}
})