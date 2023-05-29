import { Select, SelectContent, SelectItem, SelectGroup, SelectLabel, SelectSeparator } from '.';

const meta = {
  title: 'UI/Select',
};

export default meta;

export const Default = {
  render: () => (
    <Select placeholder="Pick one">
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Front-end JavaScript frameworks</SelectLabel>
          <SelectItem value="vue">Vue</SelectItem>
          <SelectItem value="react">React</SelectItem>
          <SelectItem value="angular">Angular</SelectItem>
          <SelectItem value="svelte">Svelte</SelectItem>
          <SelectItem value="backbone">Backbone</SelectItem>
          <SelectItem value="ember">Ember</SelectItem>
          <SelectItem value="polymer">Polymer</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Back-end JavaScript frameworks</SelectLabel>
          <SelectItem value="node">Node</SelectItem>
          <SelectItem value="next">Next</SelectItem>
          <SelectItem value="express">Express</SelectItem>
          <SelectItem value="gatsby">Gatsby</SelectItem>
          <SelectItem value="meteor">Meteor</SelectItem>
          <SelectItem value="nuxt">Nuxt</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};

export const Disabled = {
  render: () => (
    <Select disabled placeholder="Pick one">
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Front-end JavaScript frameworks</SelectLabel>
          <SelectItem value="vue">Vue</SelectItem>
          <SelectItem value="react">React</SelectItem>
          <SelectItem value="angular">Angular</SelectItem>
          <SelectItem value="svelte">Svelte</SelectItem>
          <SelectItem value="backbone">Backbone</SelectItem>
          <SelectItem value="ember">Ember</SelectItem>
          <SelectItem value="polymer">Polymer</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Back-end JavaScript frameworks</SelectLabel>
          <SelectItem value="node">Node</SelectItem>
          <SelectItem value="next">Next</SelectItem>
          <SelectItem value="express">Express</SelectItem>
          <SelectItem value="gatsby">Gatsby</SelectItem>
          <SelectItem value="meteor">Meteor</SelectItem>
          <SelectItem value="nuxt">Nuxt</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};

export const WithDisabledItems = {
  render: () => (
    <Select placeholder="Pick one">
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Front-end JavaScript frameworks</SelectLabel>
          <SelectItem value="vue">Vue</SelectItem>
          <SelectItem value="react">React</SelectItem>
          <SelectItem disabled value="angular">
            Angular
          </SelectItem>
          <SelectItem value="svelte">Svelte</SelectItem>
          <SelectItem value="backbone">Backbone</SelectItem>
          <SelectItem disabled value="ember">
            Ember
          </SelectItem>
          <SelectItem value="polymer">Polymer</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Back-end JavaScript frameworks</SelectLabel>
          <SelectItem value="node">Node</SelectItem>
          <SelectItem value="next">Next</SelectItem>
          <SelectItem value="express">Express</SelectItem>
          <SelectItem value="gatsby">Gatsby</SelectItem>
          <SelectItem disabled value="meteor">
            Meteor
          </SelectItem>
          <SelectItem value="nuxt">Nuxt</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};

export const SmallSize = {
  render: () => (
    <Select size="sm" placeholder="Pick one">
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Front-end JavaScript frameworks</SelectLabel>
          <SelectItem value="vue">Vue</SelectItem>
          <SelectItem value="react">React</SelectItem>
          <SelectItem value="angular">Angular</SelectItem>
          <SelectItem value="svelte">Svelte</SelectItem>
          <SelectItem value="backbone">Backbone</SelectItem>
          <SelectItem value="ember">Ember</SelectItem>
          <SelectItem value="polymer">Polymer</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Back-end JavaScript frameworks</SelectLabel>
          <SelectItem value="node">Node</SelectItem>
          <SelectItem value="next">Next</SelectItem>
          <SelectItem value="express">Express</SelectItem>
          <SelectItem value="gatsby">Gatsby</SelectItem>
          <SelectItem value="meteor">Meteor</SelectItem>
          <SelectItem value="nuxt">Nuxt</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};

export const MediumSize = {
  render: () => (
    <Select size="md" placeholder="Pick one">
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Front-end JavaScript frameworks</SelectLabel>
          <SelectItem value="vue">Vue</SelectItem>
          <SelectItem value="react">React</SelectItem>
          <SelectItem value="angular">Angular</SelectItem>
          <SelectItem value="svelte">Svelte</SelectItem>
          <SelectItem value="backbone">Backbone</SelectItem>
          <SelectItem value="ember">Ember</SelectItem>
          <SelectItem value="polymer">Polymer</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Back-end JavaScript frameworks</SelectLabel>
          <SelectItem value="node">Node</SelectItem>
          <SelectItem value="next">Next</SelectItem>
          <SelectItem value="express">Express</SelectItem>
          <SelectItem value="gatsby">Gatsby</SelectItem>
          <SelectItem value="meteor">Meteor</SelectItem>
          <SelectItem value="nuxt">Nuxt</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};

export const LargeSize = {
  render: () => (
    <Select size="lg" placeholder="Pick one">
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Front-end JavaScript frameworks</SelectLabel>
          <SelectItem value="vue">Vue</SelectItem>
          <SelectItem value="react">React</SelectItem>
          <SelectItem value="angular">Angular</SelectItem>
          <SelectItem value="svelte">Svelte</SelectItem>
          <SelectItem value="backbone">Backbone</SelectItem>
          <SelectItem value="ember">Ember</SelectItem>
          <SelectItem value="polymer">Polymer</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Back-end JavaScript frameworks</SelectLabel>
          <SelectItem value="node">Node</SelectItem>
          <SelectItem value="next">Next</SelectItem>
          <SelectItem value="express">Express</SelectItem>
          <SelectItem value="gatsby">Gatsby</SelectItem>
          <SelectItem value="meteor">Meteor</SelectItem>
          <SelectItem value="nuxt">Nuxt</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};
