jQuery(document).ready(function() {
    $('.subscribe form').submit(function(e) {
    	e.preventDefault();
        var postdata = $('.subscribe form').serialize();
        $.ajax({
            type: 'POST',
            url: 'assets/subscribe.php',
            data: postdata,
            dataType: 'json',
            success: function(json) {
                if(json.valid == 0) {
                    $('.mainh').html('<h4 class="Georgia01"><b>
									<ul><li>1956 ൽ പൊതുമരാമത്ത് വകുപ്പിന്റെ കീഴിൽ കുടിവെള്ള വിതരണവും ഉൾപ്പെടുത്തി.</li>	
										<li>1964ൽ പൊതുജനാരോഗ്യ എൻജിനീയറിംഗ് വകുപ്പ് നിലവിൽ വന്നു.</li>
										<li>1984 ൽ കേരള വാട്ടർ ആൻറ് വേസ്റ്റ് വാട്ടർ അതോറിറ്റിയും, 1986 ൽ കേരള വാട്ടർ അതോറിറ്റിയും പ്രാബല്യത്തിൽ വന്നു.കേരള വാട്ടർ സപ്ലൈ ആന്റ് സിവറേജ് ആക്ട് 1986 ന്റെ അടിസ്ഥാനത്തിലാണ് അതോറിറ്റിയുടെ രൂപീകരണം നടന്നത്.</li>
									</ul></b></h4>');
                    $('.mainh').fadeIn();
                }
            }
        });
    });

});
