<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { onMounted } from 'vue'
import TopNav from '@/components/TopNav.vue';
import { ChevronLeft, SquarePen, Plus} from 'lucide-vue-next';
import Image from '@/components/Image.vue'
import placeholderImage from '@/assets/images/placeholder_ruben.jpg'; // Importeer de afbeelding
import useMember from '@/composables/useMembers';
import SessionCard from '@/components/SessionCard.vue';
import ActionButton from '@/components/ActionButton.vue';

export default defineComponent({
  name: 'GroupDetail',
  components: {
    TopNav,
    Image,
    SessionCard,
    ActionButton,
    Plus
  },

  setup() {

    const imageSrc = ref(placeholderImage); // Gebruik de geïmporteerde afbeelding

    function computedStatus(id: number){
      if (id % 2 === 0) {
        return 'active'
      } else if (id % 3 === 0){
        return 'inactive'
      } else {
        return 'finished'
      }
    }

    const {fetchMembers, error, members, loading} = useMember()
    onMounted(async () => {
      await fetchMembers()
    })

    return {
      ChevronLeft,
      SquarePen,
      imageSrc,
      error,
      members,
      loading,
      computedStatus
    };
  }  
})
</script>

<template>
  <TopNav
    :leftIcon="ChevronLeft"
    :rightIcon="SquarePen"
    linkIconLeft="/groups-overview"
    :onRightIconClick="editGroup"
    :heading="$route.params.id"
  >
    <div class="float-right ml-5">
      <Image
        v-for="member in members"
        class="-ml-3 rounded-2xl inline-block"
        :src="member.picture.thumbnail"
        :imageWidth="30"
        alt="Groep afbeelding"
        style="box-shadow: -1px -1px 101px 0px rgba(99,102,241,0.26);"
      />
    </div>
  </TopNav>
  <div class="relative w-[180px] h-[180px] m-auto mt-12">
    <Image
      class="rounded-2xl border-2 border-white"
      :src="imageSrc"
      :imageWidth="180"
      alt="Groep afbeelding"
      style="box-shadow: -1px -1px 101px 0px rgba(99,102,241,0.26);"
    />
  </div>
  <div class="m-7">
    <h1 class="font-secondary mb-5 inline-block text-xl font-bold">Sessies</h1>
    <div class="float-right flex items-center">
      <ActionButton
        class="font-secondary"
        value="Sessie toevoegen"
      ></ActionButton>
      <Plus class="ml-2" size="20" />
    </div>
    <SessionCard
      v-for="member in members"
      :key="computedStatus(member.id.value)"
      :sessionStatus="computedStatus(member.id.value)"
      :sessionCardImage="member.picture.thumbnail"
      :sessionCardButtonText="test"
      sessionCardTitle="Etentje"
      sessionCardDate="07/01/2025"
    />
  </div>
</template>