<template lang="html">
	<footer id="footer" class="footer">
		<div class="container _flex-row _j-between _a-start">
			<div class="footer-information">
				<p v-for = "requisitesItem in Requisites"
					class="footer-information__requisites"
					>{{ requisitesItem }}</p>
			</div>
			<div class="footer-contacts">
				<p v-for = "contactsItem in Contacts"
					class="footer-information__contacts"
					>{{ contactsItem }}</p>
			</div>
			<div class="footer-adress">
				<a v-for = "buttonItem in Buttons"
					:href = "buttonItem.link" target="_blank"
					class = "footer-adress__btn"
					:title = "buttonItem.title"
					ripple-light >
					<i class="footer-adress__btn-icon material-icons">{{ buttonItem.icon }}</i>{{ buttonItem.text }}
				</a>
			</div>
		</div>
	</footer>
</template>

<script>
	export default {
		name: 'footer',
		data() {
			return {
				Requisites: [
					'ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ «АНГАР»',
					'Официальный дилер марок Chery, Changan, Hawtai',
					'ИНН/ОГРН:' , '2443042412 / 1132443001393',
					'Адрес:' , '662150, Красноярский край, г.Ачинск, Южная промзона, квартал 1, строение 7.',
					'График работы:' , ' Пн-Сб, 10:00 - 19:00'
				],
				Contacts: [
					'Телефон отдела продаж:' , '+7 (39151) 4-66-80',
					'Сотовый:' , '+7 (983) 209-60-80',
					'Запись на ТО, отдел запчастей:' , '+7 (923) 375-50-31',
					'E-mail:' , 'angar240@mail.ru'
				],
				Buttons: [
					{
						link: '//yandex.ru/maps/-/C6aGeDOU',
						title: 'Откроется в новой вкладке',
						icon: 'pin_drop',
						text:'Показать на карте'
					},
					{
						link: '',
						title: 'Написать электронное письмо',
						icon: 'email',
						text:'Напишите нам'
					}
				]
			}
		}
	}
</script>

<style lang="scss">

	@import "../scss/partials/_layout";
	@import "../scss/partials/_mixins";
	@import "../scss/partials/_variables";

	.footer {
		height: 400px;
		padding: 40px 0;
		@include gradient( 125deg , $white );
	}
	.footer-information {
		flex-basis: 45%;
		margin-right: 1rem;
		&__requisites {
			margin: 0.5rem 0;
			color: $blacked;
			line-height: 1.5;
			&:nth-child(even) {
				margin: 0.5rem 0;
				font-size: 18px;
				font-weight: bold
			}
		}
		&__contacts {
			&:nth-child(even) {
				margin: 0.5rem 0;
				font-size: 18px;
				font-weight: bold
			}
		}
	}
	.footer-contacts {
		flex-basis: 25%;
		color: $blacked;
	}
	.footer-adress {
		display: flex;
		flex-flow: column wrap;
		justify-content: center;
		height: 100%;
		flex-basis: 25%;
		color: $blacked;
		&__btn {
			@include MDButton($white, $red) {
				display: flex;
				flex-flow: column wrap;
				justify-content: center;
				size: 100% 3rem;
				margin-bottom: 1rem;
				padding: 0 1rem;
			}
		}
		&__btn-icon {
			align-self: flex-start;
			font-size: 2rem;
			text-shadow:
		            0 4px 5px rgba($blacked, 0.14),
		            0 1px 10px rgba($blacked, 0.12),
		            0 2px 4px rgba($blacked, 0.3);
		}
	}

</style>
