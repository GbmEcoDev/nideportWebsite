// useEventData.ts
import { ref, provide, inject } from 'vue';

interface EventData {
  id: any;
  geodata: any; // Ajusta el tipo según tus necesidades
}

export const useEventData = () => {
  const selectedEventData = ref<EventData | null>(null);

  const setSelectedEventData = (data: EventData) => {
    
    selectedEventData.value = data;
  };

  return { selectedEventData, setSelectedEventData };
};

export const provideEventData = () => {
  const eventDataSymbol = Symbol('eventsData');
  const eventData = useEventData();
  provide(eventDataSymbol, eventData);
  return eventData;
};

export const injectEventData = () => {
  const eventDataSymbol = Symbol('eventssData');
  return inject(eventDataSymbol) as ReturnType<typeof useEventData>;
};
