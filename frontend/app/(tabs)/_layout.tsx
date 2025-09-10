import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      {/* this matches frontend/app/(tabs)/chat.tsx */}
      <Tabs.Screen name="chat" options={{ title: 'Chat' }} />
    </Tabs>
  );
}