Vue.component('updater-card', {
	props: ['info'],
	template: `
		<div class="card">
			<div class="info">
				<div class="logo"><img :src="''+info.logoUrl+''" alt=""></div>
				<div class="company text-center text-bold text-gray">{{info.name}}</div>
				<div class="promo text-center" v-if="info.promoMessage != ''">{{info.promoMessage}}</div>
				<div class="promo-code text-center" v-if="info.promoCode != ''">Use promo code:<span class="bold">{{info.promoCode}}</span></div>
				<ul class="features" v-if="info.features.length > 0">
					<li v-for="feature in info.features"><i class="fa fa-check" aria-hidden="true"></i> {{feature}}</li>
				</ul>
				<a target="_blank" :href="''+info.profileHref+''" class="profile text-bold text-center"  v-if="info.profileHrefe != ''">View Profile</a>
				<a target="_blank" :href="''+info.ctaUrl+''" class="button text-bold text-center">{{info.ctaText}}</a>
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