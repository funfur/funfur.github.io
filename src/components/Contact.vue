<template lang="pug">
  div#contact
    h1.contact__title 무엇이든 물어보세요
    div.container
      a.contact__each(
        v-for="(value, key) in contactList"
        :key="key"
        target="_blank"
        :href="value.href"
      )
        i.contact__info.fa(
          aria-hidden="true"
          :class="'fa-' + value.class"
        )
          p.contact__text {{ value.text }}

      a.contact__each#plusfriend-addfriend-button(
        @click="plusFriendChat"
      )
        i.contact__info.fa(
          aria-hidden="true"
          :class="'fa-' + kakao.class"
        )
          p.contact__text {{ kakao.text }}

    GoogleMaps
</template>

<script>
import {globalVar} from '@/globalVar'
import GoogleMaps from '@/components/misc/GoogleMaps'

export default {
  name: 'contact',

  data () {
    return {
      contactList: {
        call: {
          class: 'phone',
          href: 'tel:' + globalVar.callTo,
          text: globalVar.callTo
        },
        link: {
          class: 'globe',
          href: globalVar.ceoWebsiteUrl,
          text: '사장님 사이트 방문하기'
        }
      },
      kakao: {
        class: 'comments-o',
        text: '카카오톡 문의하기'
      }
    }
  },

  methods: {
    plusFriendChat() {
      Kakao.PlusFriend.chat({
        plusFriendId: process.env.KAKAO_URL // -> .env
      })
    }
  },

  components: {
    GoogleMaps
  },
}
</script>

<style lang="scss">

#contact {
  border-top: 1px solid $texteee;

  .contact__title {
    font-weight: 300;
    margin-bottom: $grid12x;
  }

  .container {
    text-align: center;
    @include grid-layout();

    @media #{$default} {
      grid-gap: $grid20x;
    }

    @media #{$tablet} {
      grid-gap: $grid4x;
    }

    @media #{$middle} {
      @include grid-layout(1, $grid12x, $grid16x);
    }

    .contact__each {
      color: $text999;
      cursor: pointer;
      transition: color .25s ease;

      &:hover {
        color: $brand-yellow;
      }

      .contact__info {
        @include font-size($grid8x);

        .contact__text {
          margin-bottom: 0;
          margin-top: -#{$grid4x};
          @include font-stack-html();

          @media #{$ie} {
            margin-top: $grid2x !important;
          }

          @supports (-ms-ime-align:auto) {
            margin-top: $grid2x !important;
          }

          &::before {
            content: "\A";
            white-space: pre;
          }
        }
      }
    }
  }
}
</style>
