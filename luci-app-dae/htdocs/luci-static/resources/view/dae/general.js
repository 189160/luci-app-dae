'use strict';
'require form';
'require dae.editor as heditor';

/*
 * General Settings —— 一个页签承载 4 个配置块（全局 / 解析 / 节点 / 路由）。
 * 页签标题与描述固定；当前编辑哪一块由「配置块」下拉与编辑器标题体现。
 */

return heditor.editorPage({
	title: _('General Settings'),
	description: _('DAE global switches and configuration'),
	blocks: [
		{
			key: 'config',
			/* 原来挂在编辑器上的「include 说明」并进本块描述：合并后编辑器区不再单独放描述 */
			description: _('Configure global settings for DAE. Configure the include field correctly for separate config to work, or enter the complete configuration here.'),
			editorTitle: _('Global Configuration')
		},
		{
			key: 'dns',
			description: _('Configure DNS settings for DAE.'),
			editorTitle: _('DNS Configuration')
		},
		{
			key: 'node',
			description: _('Configure nodes and groups for DAE.'),
			editorTitle: _('Node Configuration')
		},
		{
			key: 'route',
			description: _('Configure routing rules for DAE.'),
			editorTitle: _('Route Configuration')
		}
	],
	uciSection: function(section) {
		var enable = section.option(form.Flag, 'enabled', _('Start Service'));
		enable.rmempty = false;
	}
});
