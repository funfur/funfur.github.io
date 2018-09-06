<template lang="pug">
  div#hero
    div.container
    div.hero__dim
    div.hero__wrapper
      p.hero__subtitle
        | 스토리가 있는
        span.hero__title--nbsp &nbsp;
        span.hero__br
        | 디자이너 가구, <b>{{ $t('generic.title') }}</b>
      h1.hero__title
        | 공방가구의 새로운 판로
        br
        | 모바일 가구거리
        span.hero__title--nbsp &nbsp;
        span.hero__br
        | {{ $t('generic.title') }}가 함께합니다

      div.global__cta
        <a class="global__cta--link" v-scroll-to="{el:'#download', offset: -54}">
          button.global__cta--btn.brand--bg {{ $t('generic.download') }}
        </a>
      div.global__cta
        a.global__cta--link(
          :href="baseURI"
          target="_blank"
          title="뻔뻐 입점신청 페이지(새 탭)"
        )
          button.global__cta--btn {{ $t('generic.joinus') }}
</template>

<script>
import {globalVar} from '@/globalVar'

export default {
  name: 'hero',

  data () {
    return {
      baseURI: globalVar.ceoRegisterWebsiteUrl
    }
  }
}
</script>

<style lang="scss">
$baseURI: '/src/assets/dist/hero.jpg';

#hero {
  height: 560px;
  position: relative;
  margin-top: $grid14x;
  background-image: url('#{$baseURI}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  @media #{$pablet} {
    height: 480px;
  }

  .hero__dim {
    width: 100%;
    height: 100%;
    background-color: $black54;
  }

  .hero__wrapper {
    text-align: center;
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    @include transform(translate(-50%, -50%));

    .hero__subtitle {
      margin-bottom: -#{$grid2x};
      @include font-size($grid5x);
    }

    .hero__title {

      .hero__title--nbsp {
        display: inline-block;
      }

      @media #{$middle} {
        @include font-size($grid6x);
        @include line-height($grid6x);

        .hero__title--nbsp {
          display: none;
        }

        .hero__br {

          &::after {
            content: "\a ";
            white-space: pre;
          }
        }
      }
    }

    @media #{$middle} {

      .hero__title--nbsp {
        display: none;
      }

      .hero__br {

        &::after {
          content: "\a ";
          white-space: pre;
        }
      }
    }
  }


  .global__cta {
    display: inline-block;

    .global__cta--btn {
      width: 160px;
      margin: $grid2x;

      @media #{$pablet} {
        width: 148px;
      }

      &.brand--bg {
        color: #fff;
        border: 2px solid $brand-yellow;
        background-color: $brand-yellow;

        &:hover {
          color: #fff;
          background-color: $brand-yellow;
        }
      }

      &:hover {
        color: $brand-yellow;
        background-color: #fff;
        opacity: .64;
      }
    }
  }
}
</style>
