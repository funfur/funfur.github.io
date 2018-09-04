<template lang="pug">
  div#footer
    div.container
      p.footer__copyright
        | © {{thisYear}}. (주){{companyName}}. All Rights Reserved.

      p.footer__info
        span.footer__info-each(
          v-for="info in infoList"
        ) {{ info }}
        span.footer__info-each.clipboard(
          @click="toast"
          v-clipboard:copy="mailTo"
          v-tooltip.bottom="{content: '이메일 주소를 복사하려면 클릭하세요', delay: {show: 500, hide: 100}}"
        ) 이메일: {{ mailTo }}

      p.footer__terms
        router-link.footer__terms-each(
          :key="key"
          :to="'tos/' + value"
          target="_blank"
          v-tooltip.bottom="{content: key + '(새 탭)', delay: {show: 500, hide: 100}}"
          v-for="(value, key) in tos"
        ) {{ key }}
</template>

<script>
import Vue from 'vue'
import {globalVar} from '@/globalVar'
import Toasted from 'vue-toasted'
import VueClipboard from 'vue-clipboard2'

Vue.use(Toasted)
Vue.use(VueClipboard)

export default {
  name: 'footer-el',

  data () {
    return {
      year: '',
      companyName: globalVar.companyName,
      mailTo: globalVar.mailTo,
      infoList: [
        '상호명: ' + globalVar.companyNameFull,
        '사업자등록번호: ' + globalVar.companyId,
        '대표이사: ' + globalVar.ceoName,
        '대표전화: ' + globalVar.callTo,
        '팩스: ' + globalVar.faxTo,
        '주소: ' + globalVar.companyAddress,
      ],
      tos: {
        개인정보처리방침: 'privacy',
        제품판매이용약관: 'terms-product',
        사장님사이트이용약관: 'terms-site'
      }
    }
  },

  methods: {
    toast () {
      this.$toasted.show('이메일 주소가 복사되었습니다', {
        theme: "primary",
        position: "bottom-center",
        duration : 2000
      })
    }
  },

  computed: {
    thisYear () {
      return this.year = new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss">

#footer {
  width: 100%;
  height: $grid24x;
  border-top: 1px solid $texteee;
  padding: $grid8x 0 $grid12x;

  @media #{$pablet} {
    padding-bottom: $grid24x;
  }

  @media #{$mobile} {
    padding-bottom: $grid40x;
  }

  .container {

    .footer__copyright,
    .footer__info-each,
    .footer__terms {
      @include font-size($grid3x);
      @include line-height($grid3x);
    }


    .footer__copyright {
      color: $text333;
      font-weight: 900;
    }

    .footer__info {
      margin-top: -#{$grid2x} !important;
    }

    .footer__info,
    .footer__terms {
      color: $text999;
      margin-top: -#{$grid2x};
      @include line-height($grid3x);


      // .footer__terms {
      //   display: inline-block;
      //   margin-top: -#{$grid8x};
      // }

      .footer__terms-each {
        color: $text999;
        transition: color .25s ease;

        &:hover {
          color: $text333;
        }

        &:not(:first-child) {

          &::before {
            content: " | ";
            color: $text999;
          }
        }
      }


      .footer__info-each {

        &.clipboard {
          cursor: pointer;
        }

        &:not(:first-child) {

          &::before {
            content: " | ";
          }
        }
      }
    }
  }
}
</style>
