
<!-- 多说公共JS代码 start (一个网页只需插入一次) -->

	var duoshuoQuery = {short_name:"dongy"};
	(function() {
		var ds = document.createElement('script');
		ds.type = 'text/javascript';ds.async = true;
		ds.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//static.duoshuo.com/embed.js';
		ds.charset = 'UTF-8';
		(document.getElementsByTagName('head')[0] 
		 || document.getElementsByTagName('body')[0]).appendChild(ds);
	})();
<!--禁用多说默认分享到微博和空间的功能 -->	
$(document).on('click', '#ds-thread textarea[name=message]', function(){
    $('#ds-sync-checkbox').prop('checked', false);
});

	
<!-- 多说公共JS代码 end -->
