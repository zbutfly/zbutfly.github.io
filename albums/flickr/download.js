var extras = [
	'can_download', 'count_comments', 'count_faves', 'count_views', 'date_taken', 'date_upload',
	'owner_name', 'owner_datecreate', 'path_alias', 'realname', 'rotation', 'url_k', 'url_o', 'url_q', 'o_dims',
	'datecreate', 'date_activity', 'date_activity_detail'
];
var qs = {
	'csrf': '',
	'viewerNSID': '',
	'get_group_info': '1',
	'group_id': '3947235@N24',
	'method': 'flickr.groups.pools.getPhotos',
	'api_key': 'ae8a1d840bff667375eec0a31f8d659d',
	'format': 'json',
	'hermes': '1',
	'hermesClient': '1',
	'reqId': 'e30d4b87',
	'nojsoncallback': '1',
	'per_page': '500',
	'page': '' // need to be replaced on loop...
};
var url = 'https://api.flickr.com/services/rest'
url += '?extras=' + extras.join(',');
for (var k in qs)
	url += '&' + k + '=' + qs[k];
var cookies = {
	'xb': '872223',
	'ajs_user_id': 'null',
	'ajs_group_id': 'null',
	'ajs_anonymous_id': '%224f435c4c-ed68-4497-b7e7-73224bd0a9d0%22',
	'vp': '1619,1336,1,17,fluid-centered%3A1295'
}
var headers = {
	'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:64.0) Gecko/20100101 Firefox/64.0',
	'Accept': '*/*',
	'Accept-Language': 'en-US,zh-CN;q=0.8,en;q=0.5,zh-TW;q=0.3',
	'Referer': 'https://www.flickr.com',
	'Origin': 'https://www.flickr.com',
	'DNT': '1',
	'Connection': 'keep-alive',
	'Pragma': 'no-cache',
	'Cache-Control': 'no-cache',
	'TE': 'Trailers',
	'Cookie': 'xb=872223; ajs_user_id=null; ajs_group_id=null; ajs_anonymous_id=%224f435c4c-ed68-4497-b7e7-73224bd0a9d0%22; vp=1619,1336,1,17,fluid-centered%3A1295'
};
