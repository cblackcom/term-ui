import type { Meta, StoryObj } from '@storybook/react-vite'
import { L5Screen as Component, L4ScreenContentScroll, L4ScreenContentStack } from './L5Screen'
import { L3ScreenStatus } from './L3ScreenStatus'
import { L1ScreenStatusLogoCBlack, L1ScreenStatusLogoPNDLM } from '../misc/L1Logos'
import { L2BoxContent, L2BoxTitle, L3BoxRoot, L3FpoBox } from '../box/L3Box'
import { L3BoxSize } from '../box/L3Box.constants'
import { L2BoxBottomButtonRow } from '../box/L2BoxButtonRow'
import { L1Button } from '../buttons/L1Button'

const meta: Meta<typeof Component> = {
	title: 'Components/Screen/L5Screen',
	component: Component,
	parameters: {
		layout: 'fullscreen',
	},
}

export default meta

export const FpoInScreenContentStack: StoryObj<typeof meta> = {
	render: () => (
		<Component>
			<L4ScreenContentStack>
				<L3FpoBox />
			</L4ScreenContentStack>
			<L3ScreenStatus>
				<L1ScreenStatusLogoCBlack />
				<L1ScreenStatusLogoPNDLM />
			</L3ScreenStatus>
		</Component>
	),
	decorators: [
		(Story) => (
			<div id="root">
				<Story />
			</div>
		),
	],
}

export const StackedBoxes: StoryObj<typeof meta> = {
	render: () => (
		<Component>
			<L4ScreenContentStack>
				<L3FpoBox disabled />
				<L3BoxRoot size={L3BoxSize.None}>
					<L2BoxContent>
						LOREM IPSUM DINGLE DANGLE
						<br />
						DOOBIUS.
						<L2BoxBottomButtonRow>
							<L1Button>NO, JUST NO</L1Button>
						</L2BoxBottomButtonRow>
					</L2BoxContent>
					<L2BoxTitle>COOL BOX</L2BoxTitle>
				</L3BoxRoot>
			</L4ScreenContentStack>
			<L3ScreenStatus>
				<L1ScreenStatusLogoCBlack />
				<L1ScreenStatusLogoPNDLM />
			</L3ScreenStatus>
		</Component>
	),
	decorators: [
		(Story) => (
			<div id="root">
				<Story />
			</div>
		),
	],
}

export const FpoScreenContentScreen: StoryObj<typeof meta> = {
	render: () => (
		<Component>
			<L4ScreenContentScroll>
				<h1>Lorem Ipsum</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
					nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</p>
				<h2>Duis aute irure</h2>
				<p>
					Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
					fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</p>
				<ul>
					<li>Curabitur pretium tincidunt lacus</li>
					<li>Nulla gravida orci a odio</li>
					<li>Nullam varius, turpis et commodo pharetra</li>
				</ul>
				<blockquote>
					<p>Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.</p>
				</blockquote>
				<pre>
					<code>Vestibulum ante ipsum primis in faucibus orci luctus</code>
				</pre>
				<h2>Class aptent taciti</h2>
				<p>
					Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
					himenaeos. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
					auctor. Aenean lacinia bibendum nulla sed consectetur.
				</p>
				<ol>
					<li>Cras mattis consectetur purus sit amet fermentum</li>
					<li>Cum sociis natoque penatibus et magnis dis parturient montes</li>
					<li>Nascetur ridiculus mus donec sed odio dui</li>
				</ol>
				<p>
					Maecenas sed diam eget risus varius blandit sit amet non magna. Etiam porta sem
					malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor
					fringilla. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
					nibh, ut fermentum massa justo sit amet risus.
				</p>
				<h2>Nullam quis risus</h2>
				<p>
					Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh
					ultricies vehicula ut id elit. Donec sed odio dui. Praesent commodo cursus
					magna, vel scelerisque nisl consectetur et. Vestibulum id ligula porta felis
					euismod semper.
				</p>
				<ul>
					<li>Sed posuere consectetur est at lobortis</li>
					<li>Aenean eu leo quam pellentesque ornare</li>
					<li>Donec id elit non mi porta gravida at eget metus</li>
				</ul>
				<blockquote>
					<p>
						Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac facilisis
						in, egestas eget quam.
					</p>
				</blockquote>
				<h2>Vivamus sagittis</h2>
				<p>
					Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean
					lacinia bibendum nulla sed consectetur. Cras mattis consectetur purus sit amet
					fermentum. Donec ullamcorper nulla non metus auctor fringilla.
				</p>
				<h3>Etiam porta sem</h3>
				<p>
					Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus
					commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet
					risus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
					ridiculus mus.
				</p>
				<ul>
					<li>Praesent commodo cursus magna, vel scelerisque nisl consectetur</li>
					<li>Vestibulum id ligula porta felis euismod semper</li>
					<li>Sed posuere consectetur est at lobortis</li>
				</ul>
				<blockquote>
					<p>
						Aenean eu leo quam pellentesque ornare, donec id elit non mi porta gravida.
					</p>
				</blockquote>
				<pre>
					<code>Nulla vitae elit libero, a pharetra augue mollis interdum</code>
				</pre>
				<h3>Cras justo odio</h3>
				<p>
					Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas sed diam
					eget risus varius blandit sit amet non magna. Nullam id dolor id nibh ultricies
					vehicula ut id elit.
				</p>
				<ol>
					<li>Donec sed odio dui</li>
					<li>Nullam quis risus eget urna mollis ornare vel eu leo</li>
					<li>Curabitur blandit tempus porttitor</li>
				</ol>
				<p>
					Cras mattis consectetur purus sit amet fermentum. Vivamus sagittis lacus vel
					augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed
					consectetur. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
				</p>
			</L4ScreenContentScroll>
			<L3ScreenStatus>
				<L1ScreenStatusLogoCBlack />
				<L1ScreenStatusLogoPNDLM />
			</L3ScreenStatus>
		</Component>
	),
	decorators: [
		(Story) => (
			<div id="root">
				<Story />
			</div>
		),
	],
}
