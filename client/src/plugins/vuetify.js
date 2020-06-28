import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
	theme: {
		themes: {
			light: {
				primary: '#4C6BCE', // custom blue
				secondary: '#F2F2F2', // light grey
				accent: '#484747', // almost black
			}
		}
	}
});
