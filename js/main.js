Vue.component('updater-cards', {
	props: ['cards']
})

Vue.component('updater-card', {
	// props: {
	//	name: {required: true}, 
	//	logoUrl: {required: true}, 
	//	img: {required: true}, 
	//	promoMessage: {required: false}, 
	//	promoCode: {required: false}, 
	//	ctaUrl: {required: true}, 
	//	ctaText: {required: true}, 
	//	features: {required: false}, 
	//	profileHref: {required: false}
	//},
	props: ['cards'],
	template: `
		<div class="card">
			<div class="logo"><img src="{{logoUrl}}" alt=""></div>
			<div class="company">{{name}}</div>
			<div class="promo">{{promoMessage}}</div>
			<div class="promo-code" v-if="promoCode != ''" v-show="isVisible">Use promo code:<span>{{promoCode}}</span></div>
			<ul class="features">
				<li v-for="feature in features">{{feature}}</li>
			</ul>
			<a target="_blank" href="{{profileHref}}" class="profile" v-show="">View Profile</div>
			<a target="_blank" href="{{ctaUrl}}" class="button">{{ctaText}}</a>
		</div>
		`,
	
	data(){
		return{
			//isVisible: true
		}
	},

	methods: {
		
	}
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
				ctaUrl :   'https://www.updater.com',
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
				profileHref :   'https://www.pensketruckrental.com/quote/start.html'
			}
		]
	}
})