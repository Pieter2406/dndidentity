<template>
  <div class="d-flex">
    <CharacterCard
      v-for="(character, index) in characterState.characters"
      :key="index"
      :character="character"
    >
      KAKAPIPI
    </CharacterCard>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace, State } from 'vuex-class';
import CharacterCard from '../components/CharacterCard.vue';
import { ICharacter } from '../contracts/Character';
import { ICharacterState } from '../store/contract';

const characterStoreNS = namespace('characterStore');

@Component({ components: { CharacterCard } })
export default class CharacterView extends Vue {
  @State('characterStore')
  public characterState!: ICharacterState;

  @characterStoreNS.Action
  public fetchCharacters!: () => Promise<void>;

  public async created() {
    await this.fetchCharacters();
  }
}
</script>
