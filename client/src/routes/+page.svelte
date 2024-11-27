<script>
  import Address from "$lib/components/Address.svelte";
  import Age from "$lib/components/Age.svelte";
  import Friend from "$lib/components/Friend.svelte";
  import Name from "$lib/components/Name.svelte";
  import Navigation from "$lib/components/navigation/navigation.svelte";
  import Pets from "$lib/components/Pets.svelte";

  let user = $state({
    name: "John Doe",
    age: 30,
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zip: "12345"
    },
    pets: [
      { name: "Fluffy", type: "cat" },
      { name: "Buddy", type: "dog" }
    ],
    friends: {
      Alice: { name: "Alice", age: 25 },
      Bob: { name: "Bob", age: 30 },
    }
  })
</script>
<Navigation/>

<Name name={user.name} />
<Age  age={user.age} />
<Address address={user.address} />
<Pets pets={user.pets} />
<Friend friends={user.friends} />

<input bind:value={user.name} />
<input bind:value={user.friends['Alice']['name']} />

<style lang="scss">
  @use "$lib/styles/includes/brakepoints.scss" as *;

</style>
