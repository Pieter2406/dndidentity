<template>
    <div class="d-flex">
        <CharacterCard v-for="(character, index) in characterState.characters" :key="index" :character="character">
            KAKAPIPI
        </CharacterCard> 
    </div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import {ICharacter} from '../contracts/Character';
import { namespace, State } from 'vuex-class';
import { ICharacterState } from '../store/contract';
import CharacterCard from '../components/CharacterCard.vue';

const characterStoreNS = namespace('characterStore');

@Component({components:{ CharacterCard }})
export default class CharacterView extends Vue 
{

    @State('characterStore')
    public characterState!: ICharacterState

    @characterStoreNS.Action
    public fetchCharacters!: () => Promise<void>;

    public async created(){
        await this.fetchCharacters();
    }

} 
</script>